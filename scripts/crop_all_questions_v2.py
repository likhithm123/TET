#!/usr/bin/env python3
"""
Sequential Question Cropper & Image Generator (V2 - Complete Math Formula & WebP Support)
Guarantees:
- Upward formula detection: Captures all numerators, exponents, and fractions above question number
- Boundary precision: End of previous question is exactly the top of current question's formulas
- Protection for questions 1..4 against matching indented option numbers
- Word-level coordinates for exact question start and end
- Strictly sequential detection (no backwards jumps, no decimal false positives)
- All 4 options captured completely
- Cross-page spillover stitching using Pillow
- Left white-space auto-trimming for mobile responsiveness and fast rendering
- Dual format export: Saves both high-performance .webp and .png for all questions
"""

import os
import re
import pymupdf
from PIL import Image, ImageChops

def clean_text(s):
    if not s: return ''
    for d in range(10):
        s = s.replace(chr(0xf030 + d), str(d))
    s = s.replace('\uf02e', '.').replace('\uf020', ' ')
    return s

def trim_image(im):
    try:
        bg = Image.new(im.mode, im.size, (255, 255, 255))
        diff = ImageChops.difference(im, bg)
        bbox = diff.getbbox()
        if bbox:
            # Leave small padding (10px left, 6px right, 4px top/bottom)
            x0 = max(0, bbox[0] - 10)
            y0 = max(0, bbox[1] - 4)
            x1 = min(im.width, bbox[2] + 10)
            y1 = min(im.height, bbox[3] + 4)
            return im.crop((x0, y0, x1, y1))
    except Exception:
        pass
    return im

def crop_subject_words(pdf_path, out_dir, total_q, max_pno, x_max=145, x_max_first4=115, is_cdp=False, is_tel=False, is_eng=False, is_maths=False):
    os.makedirs(out_dir, exist_ok=True)
    doc = pymupdf.open(pdf_path)
    print(f"\n==========================================")
    print(f"Mapping questions for {pdf_path} (Target: {total_q}, max_page: {max_pno})")
    print(f"==========================================")
    
    current_q = 0
    q_map = {} # qnum -> {'pno': int, 'y0': float, 'y1': float, 'x0': float}
    seen_318 = False
    
    # Pass 1: Map all question number words sequentially
    for pno in range(1, max_pno):
        page = doc[pno]
        words = page.get_text('words')
        words = sorted(words, key=lambda w: (w[1], w[0]))
        
        for w in words:
            target = current_q + 1
            if target <= 4 and w[0] > x_max_first4:
                continue
            if w[0] > x_max:
                continue
                
            w_clean = clean_text(w[4]).strip()
            
            m = re.match(r'^' + str(target) + r'(?:[\.\)]|$)', w_clean)
            if m:
                current_q = target
                q_map[current_q] = {'pno': pno, 'y0': w[1], 'y1': w[3], 'x0': w[0]}
            elif is_cdp and target == 319 and not seen_318:
                m2 = re.match(r'^318(?:[\.\)]|$)', w_clean)
                if m2:
                    seen_318 = True
                    current_q = 319
                    q_map[current_q] = {'pno': pno, 'y0': w[1], 'y1': w[3], 'x0': w[0]}
            elif is_tel and target == 58:
                m3 = re.match(r'^59(?:[\.\)]|$)', w_clean)
                if m3:
                    current_q = 58
                    q_map[current_q] = {'pno': pno, 'y0': w[1], 'y1': w[3], 'x0': w[0]}
            elif is_tel and target == 92:
                m4 = re.match(r'^93(?:[\.\)]|$)', w_clean)
                if m4:
                    current_q = 93
                    q_map[current_q] = {'pno': pno, 'y0': w[1], 'y1': w[3], 'x0': w[0]}

    print(f"Mapped {len(q_map)} questions for {pdf_path}.")
    q_list = sorted(q_map.keys())
    
    # Pass 2: Calculate boundaries
    if is_maths:
        bounds = {}
        for idx, qnum in enumerate(q_list):
            curr = q_map[qnum]
            pno = curr['pno']
            page = doc[pno]
            words = page.get_text('words')
            drawings = page.get_drawings()
            
            # y_top: first on page vs mutual boundary from previous question
            if idx == 0 or q_map[q_list[idx - 1]]['pno'] != pno:
                formula_w = [w[1] for w in words if curr['y0'] - 24.0 <= w[1] < curr['y0'] and w[0] >= 140 and w[1] >= 40]
                formula_d = [d['rect'].y0 for d in drawings if curr['y0'] - 24.0 <= d['rect'].y0 < curr['y0'] and d['rect'].x0 >= 140 and d['rect'].y0 >= 40]
                all_above = formula_w + formula_d
                y_top = max(40.0, min(all_above) - 2.0) if all_above else max(40.0, curr['y0'] - 2.0)
            else:
                y_top = bounds[q_list[idx - 1]][2]
                
            # y_bottom: split before next question or bottom of last question on page
            is_last = (idx == len(q_list) - 1)
            nxt = None if is_last else q_map[q_list[idx + 1]]
            if nxt and nxt['pno'] == pno:
                opt4_candidates = [w for w in words if w[4] == '(4)' and curr['y0'] <= w[1] < nxt['y0'] and 140 <= w[0] <= 180]
                opt4 = opt4_candidates[-1]
                opt4_line = [w for w in words if abs(w[1] - opt4[1]) < 8 and curr['y0'] <= w[1] < nxt['y0']]
                opt4_line_bottom = max(w[3] for w in opt4_line)
                
                formula_w = [w for w in words if opt4_line_bottom <= w[1] < nxt['y0'] and w[0] >= 140]
                formula_d = [d['rect'].y0 for d in drawings if opt4_line_bottom <= d['rect'].y0 < nxt['y0'] and d['rect'].x0 >= 140]
                
                opt4_extra_w = [w for w in formula_w if any('\u0c00' <= ch <= '\u0c7f' for ch in w[4]) and w[1] < opt4_line_bottom + 22]
                if opt4_extra_w:
                    opt4_bottom = max(w[3] for w in opt4_extra_w)
                    formula_w = [w for w in formula_w if w[1] >= opt4_bottom]
                    formula_d = [y for y in formula_d if y >= opt4_bottom]
                else:
                    opt4_bottom = opt4_line_bottom
                    
                if formula_w or formula_d:
                    next_top = min([w[1] for w in formula_w] + formula_d)
                else:
                    next_top = nxt['y0']
                    
                split_y = (opt4_bottom + next_top) / 2.0
                y_bottom = split_y
            else:
                opt4_candidates = [w for w in words if w[4] == '(4)' and curr['y0'] <= w[1] and 140 <= w[0] <= 180]
                if opt4_candidates:
                    opt4 = opt4_candidates[-1]
                    words_below = [w for w in words if w[1] >= opt4[1] and w[3] <= 780]
                    opt4_bottom = max(w[3] for w in words_below) if words_below else opt4[3]
                    y_bottom = min(page.rect.height - 25, opt4_bottom + 8)
                else:
                    y_bottom = min(page.rect.height - 25, curr['y0'] + 150)
                    
            bounds[qnum] = (pno, y_top, y_bottom)
            curr['y_top'] = y_top
            curr['y_bottom'] = y_bottom
    else:
        # Generic Pass 2 for other subjects
        for idx, qnum in enumerate(q_list):
            curr = q_map[qnum]
            pno = curr['pno']
            page = doc[pno]
            words = page.get_text('words')
            drawings = page.get_drawings()
            
            prev_qnum = q_list[idx - 1] if idx > 0 and q_map[q_list[idx - 1]]['pno'] == pno else None
            prev_y0 = q_map[prev_qnum]['y0'] if prev_qnum else 40.0
            
            min_scan_y = max(prev_y0 + 25.0, curr['y0'] - 24.0)
            above_w = [w[1] for w in words if min_scan_y <= w[1] < curr['y0'] and w[0] >= 140]
            above_d = [d['rect'].y0 for d in drawings if min_scan_y <= d['rect'].y0 < curr['y0'] and d['rect'].x0 >= 140]
            all_above = above_w + above_d
            
            if all_above:
                curr['y_top'] = max(40.0, min(all_above) - 3.0)
            else:
                curr['y_top'] = max(40.0, curr['y0'] - 2.0)
            
    # Pass 3: Crop using exact mutual boundaries and export to both WebP and PNG
    left_x = 35
    for idx, qnum in enumerate(q_list):
        curr = q_map[qnum]
        pno = curr['pno']
        page = doc[pno]
        page_w = page.rect.width
        right_x = page_w - 35
        
        y_top = curr['y_top']
        is_last_in_list = (idx == len(q_list) - 1)
        next_q = None if is_last_in_list else q_map[q_list[idx + 1]]
        
        if is_maths:
            y_bottom = curr['y_bottom']
            rect = pymupdf.Rect(left_x, y_top, right_x, y_bottom)
            pix = page.get_pixmap(clip=rect, dpi=150)
            im = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
            im_trimmed = trim_image(im)
            
            png_path = f"{out_dir}/q_{qnum}.png"
            webp_path = f"{out_dir}/q_{qnum}.webp"
            im_trimmed.save(png_path, "PNG", optimize=True)
            im_trimmed.save(webp_path, "WEBP", quality=90, method=6)
        elif next_q and next_q['pno'] == pno:
            # Next question is on the same page: boundary is exactly next_q['y_top']
            y_bottom = next_q['y_top']
            rect = pymupdf.Rect(left_x, y_top, right_x, y_bottom)
            pix = page.get_pixmap(clip=rect, dpi=150)
            im = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
            im_trimmed = trim_image(im)
            
            # Save both PNG and WebP
            png_path = f"{out_dir}/q_{qnum}.png"
            webp_path = f"{out_dir}/q_{qnum}.webp"
            im_trimmed.save(png_path, "PNG", optimize=True)
            im_trimmed.save(webp_path, "WEBP", quality=90, method=6)
        else:
            # Question is the last on this page
            blocks_below = [b for b in page.get_text('blocks') if b[1] >= curr['y0'] and b[3] <= 780]
            if blocks_below:
                y_bottom_p1 = max(b[3] for b in blocks_below) + 8
            else:
                y_bottom_p1 = page.rect.height - 35
                
            rect1 = pymupdf.Rect(left_x, y_top, right_x, min(page.rect.height - 25, y_bottom_p1))
            pix1 = page.get_pixmap(clip=rect1, dpi=150)
            
            # Check for spillover onto the next page before next question
            has_spillover = False
            if next_q and next_q['pno'] == pno + 1:
                page2 = doc[pno + 1]
                blocks_above = [b for b in page2.get_text('blocks') if b[3] <= next_q['y_top'] and b[1] >= 45]
                if blocks_above:
                    has_spillover = True
                    y_top_p2 = min(b[1] for b in blocks_above) - 4
                    y_bottom_p2 = next_q['y_top']
                    rect2 = pymupdf.Rect(left_x, max(40, y_top_p2), right_x, y_bottom_p2)
                    pix2 = page2.get_pixmap(clip=rect2, dpi=150)
                    
            png_path = f"{out_dir}/q_{qnum}.png"
            webp_path = f"{out_dir}/q_{qnum}.webp"
            if has_spillover:
                im1 = Image.frombytes("RGB", [pix1.width, pix1.height], pix1.samples)
                im2 = Image.frombytes("RGB", [pix2.width, pix2.height], pix2.samples)
                
                total_w = max(im1.width, im2.width)
                total_h = im1.height + im2.height
                stitched = Image.new("RGB", (total_w, total_h), (255, 255, 255))
                stitched.paste(im1, (0, 0))
                stitched.paste(im2, (0, im1.height))
                stitched_trimmed = trim_image(stitched)
                stitched_trimmed.save(png_path, "PNG", optimize=True)
                stitched_trimmed.save(webp_path, "WEBP", quality=90, method=6)
            else:
                im1 = Image.frombytes("RGB", [pix1.width, pix1.height], pix1.samples)
                im1_trimmed = trim_image(im1)
                im1_trimmed.save(png_path, "PNG", optimize=True)
                im1_trimmed.save(webp_path, "WEBP", quality=90, method=6)
                
    print(f"Successfully generated {len(q_list)} trimmed question images (PNG + WebP) in {out_dir}.")

def run():
    crop_subject_words('Paper 2A_Maths.pdf', 'app/assets/maths', 240, 60, x_max=145, x_max_first4=130, is_maths=True)
    crop_subject_words('Paper 2A_Physics.pdf', 'app/assets/physics', 240, 72, x_max=145, x_max_first4=80)
    crop_subject_words('Paper 2A_Biology.pdf', 'app/assets/biology', 240, 90, x_max=145, x_max_first4=110)
    crop_subject_words('Circular_2609122823186.pdf', 'app/assets/cdp', 630, 222, x_max=145, x_max_first4=80, is_cdp=True)
    crop_subject_words('Circular_2609123202038.pdf', 'app/assets/english', 720, 209, x_max=150, x_max_first4=115, is_eng=True)
    crop_subject_words('Paper 2A_Telugu.pdf', 'app/assets/telugu', 629, 147, x_max=165, x_max_first4=150, is_tel=True)

if __name__ == '__main__':
    run()
