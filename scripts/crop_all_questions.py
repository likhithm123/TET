#!/usr/bin/env python3
"""
Accurate Question Cropper & JSON Updater using Word-Level Coordinates
Generates high-resolution question pictures for ALL 2,699 questions across all 6 subjects:
- CDP (630 questions)
- English (720 questions)
- Telugu (629 questions)
- Maths (240 questions)
- Physics (240 questions)
- Biology (240 questions)
"""

import os
import re
import json
import time
import pymupdf

def clean_text(s):
    for d in range(10):
        s = s.replace(chr(0xf030 + d), str(d))
    s = s.replace('\uf02e', '.').replace('\uf020', ' ')
    return s

def crop_subject_words(pdf_path, out_dir, total_q, is_cdp=False, is_telugu=False, is_english=False):
    os.makedirs(out_dir, exist_ok=True)
    doc = pymupdf.open(pdf_path)
    print(f"\n==========================================")
    print(f"Cropping {pdf_path} -> {out_dir} (Target: {total_q})")
    print(f"==========================================")
    
    seen_318_count = 0
    seen_59_count = 0
    
    # page_questions[pno] = list of (qnum, y0, y1)
    page_questions = {}
    
    for pno in range(1, len(doc)):
        page = doc[pno]
        words = page.get_text('words')
        q_on_page = []
        
        for w in words:
            w_clean = clean_text(w[4]).strip()
            m = re.match(r'^(\d{1,3})\.', w_clean)
            if m:
                num = int(m.group(1))
                if 1 <= num <= total_q:
                    # In English, avoid matching option numbers 1..4
                    if is_english and num in [1, 2, 3, 4]:
                        # Check horizontal position: question numbers are near left margin (x0 < 100)
                        if w[0] > 95:
                            continue
                    
                    target_num = num
                    if is_cdp and num == 318:
                        seen_318_count += 1
                        if seen_318_count == 2:
                            target_num = 319
                    elif is_telugu and num == 59:
                        seen_59_count += 1
                        if seen_59_count == 1:
                            target_num = 58
                        else:
                            target_num = 59
                            
                    q_on_page.append((target_num, w[1], w[3]))
                    
        # Sort by y0
        q_on_page.sort(key=lambda x: x[1])
        # Deduplicate
        unique = []
        seen = set()
        for qnum, y0, y1 in q_on_page:
            if qnum not in seen:
                seen.add(qnum)
                unique.append((qnum, y0, y1))
        if unique:
            page_questions[pno] = unique
            
    # Crop each question
    cropped = 0
    for pno, q_items in page_questions.items():
        page = doc[pno]
        page_h = page.rect.height
        page_w = page.rect.width
        
        for i, (qnum, y0, y1_word) in enumerate(q_items):
            top = max(35, y0 - 8)
            if i + 1 < len(q_items):
                bottom = max(top + 50, q_items[i+1][1] - 4)
            else:
                bottom = min(page_h - 20, max(top + 130, y1_word + 120))
                
            if bottom - top < 60:
                bottom = min(page_h - 15, top + 140)
                
            rect = pymupdf.Rect(35, top, page_w - 35, bottom)
            pix = page.get_pixmap(clip=rect, dpi=130)
            img_path = f"{out_dir}/q_{qnum}.png"
            pix.save(img_path)
            cropped += 1
            
    print(f"Finished {pdf_path}: Successfully cropped {cropped} images in {out_dir}.")
    return cropped

def update_json_images(json_path, subject_id, total_q):
    with open(json_path, 'r', encoding='utf-8') as f:
        questions = json.load(f)
        
    found_count = 0
    missing = []
    for q in questions:
        qnum = q['qno']
        img_rel = f"assets/{subject_id}/q_{qnum}.png"
        img_full = f"app/{img_rel}"
        if os.path.exists(img_full):
            q['image'] = img_rel
            found_count += 1
        else:
            missing.append(qnum)
            
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)
    print(f"{subject_id.upper()}: JSON updated. {found_count} / {len(questions)} have images. Missing: {len(missing)}")
    if missing:
        print(f"  Missing IDs: {missing[:15]}")

if __name__ == '__main__':
    t0 = time.time()
    
    # Biology (240)
    crop_subject_words('Paper 2A_Biology.pdf', 'app/assets/biology', 240)
    update_json_images('app/data/biology.json', 'biology', 240)
    
    # Physics (240)
    crop_subject_words('Paper 2A_Physics.pdf', 'app/assets/physics', 240)
    update_json_images('app/data/physics.json', 'physics', 240)
    
    # Maths (240)
    crop_subject_words('Paper 2A_Maths.pdf', 'app/assets/maths', 240)
    update_json_images('app/data/maths.json', 'maths', 240)
    
    # Telugu (629)
    crop_subject_words('Paper 2A_Telugu.pdf', 'app/assets/telugu', 630, is_telugu=True)
    update_json_images('app/data/telugu.json', 'telugu', 630)
    
    # CDP (630)
    crop_subject_words('Circular_2609122823186.pdf', 'app/assets/cdp', 630, is_cdp=True)
    update_json_images('app/data/cdp.json', 'cdp', 630)
    
    # English (720)
    crop_subject_words('Circular_2609123202038.pdf', 'app/assets/english', 720, is_english=True)
    update_json_images('app/data/english.json', 'english', 720)
    
    print(f"\n==========================================")
    print(f"ALL QUESTION IMAGES GENERATED IN {time.time() - t0:.2f}s!")
    print(f"==========================================")
