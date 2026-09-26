/**
 * TET Paper 2A Practice & Assessment Platform
 * Bilingual (English & Telugu), Comprehensive (2,699 Questions across 6 Subjects)
 * Mobile-Optimized with Direct Question Navigation Bar, Question Pictures, and Auto-Advance
 */

// UI Translations
const I18N = {
  en: {
    brand_title: "TET 2A Knowledge Master",
    brand_sub: "AP & TS TET Question Bank",
    hero_title: "Master Your TET Paper 2A Exam",
    hero_sub: "Comprehensive CBT platform covering all 2,699 questions across 6 subjects. Official question cards, instant feedback (+1 / 0), verified keys, bilingual viewing, and seamless subject navigation.",
    stat_total_q: "Total Questions",
    stat_subjects: "Subjects",
    stat_passed: "Attempted",
    stat_avg_score: "Total Score",
    choose_subject_title: "Choose a Subject to Begin",
    questions_count: "Questions",
    start_test: "Start Subject Test",
    resume_test: "Resume Test",
    score_label: "Score",
    qno_prefix: "Question",
    of_label: "of",
    q_jump_lbl: "Jump to Q#:",
    auto_advance: "Auto-Next",
    feedback_correct: "Correct! +1 Mark",
    feedback_wrong: "Incorrect! (0 Marks)",
    correct_is: "Official Answer: Option",
    prev_q: "Prev",
    next_q: "Next",
    submit_sub: "Submit Subject",
    drawer_title: "Question Navigator",
    drawer_title_short: "Questions",
    legend_correct: "Correct",
    legend_wrong: "Wrong",
    legend_unanswered: "Unanswered",
    legend_current: "Current",
    modal_congrats: "Subject Completed!",
    stat_correct: "Correct (+1)",
    stat_wrong: "Wrong (0)",
    stat_accuracy: "Accuracy",
    btn_next_sub: "Proceed to Next Subject",
    btn_review: "Review Questions",
    btn_hub: "Subject Hub",
    btn_back_to_sub: "Back to Subjects",
    retake_sub: "Retake Subject",
    btn_reset_all: "Reset Test Progress",
    reset_modal_title: "Reset All Progress?",
    reset_modal_desc: "This will permanently clear all your saved answers, subject scores, and test history across all 6 subjects so you can start fresh.",
    btn_cancel: "Cancel",
    btn_confirm_reset: "Yes, Reset Everything",
    toast_reset_done: "All test progress has been reset successfully!",
    btn_reset_sub: "Reset Subject",
    btn_reset_sub_short: "Reset",
    reset_sub_modal_title: "Reset Subject Progress?",
    reset_sub_modal_desc: "This will clear all saved answers and score for {sub} so you can start fresh.",
    btn_confirm_reset_sub: "Yes, Reset Subject",
    toast_sub_reset_done: "Subject progress has been reset successfully!",
    nav_volume: "Volume",
    nav_volume_off: "Muted",
    nav_theme_dark: "Dark",
    nav_theme_light: "Light"
  },
  te: {
    brand_title: "టెట్ 2A పరీక్షా వేదిక (CBT)",
    brand_sub: "టీచర్ ఎలిజిబిలిటీ టెస్ట్ ప్రశ్నల భాండాగారం",
    hero_title: "టెట్ పేపర్ 2A లో అత్యుత్తమ స్కోరు సాధించండి",
    hero_sub: "అన్ని 6 సబ్జెక్టుల 2,699 అధికారిక ప్రశ్నలతో సమగ్ర ప్రాక్టీస్. ప్రశ్న పత్రం చిత్రం, తక్షణ మూల్యాంకనం (+1 / 0) మరియు ద్విభాషా సదుపాయం.",
    stat_total_q: "మొత్తం ప్రశ్నలు",
    stat_subjects: "సబ్జెక్టులు",
    stat_passed: "ప్రయత్నించినవి",
    stat_avg_score: "మొత్తం స్కోరు",
    choose_subject_title: "సబ్జెక్ట్ ఎంపిక చేసుకోండి",
    questions_count: "ప్రశ్నలు",
    start_test: "పరీక్ష ప్రారంభించండి",
    resume_test: "కొనసాగించండి",
    score_label: "స్కోరు",
    qno_prefix: "ప్రశ్న సంఖ్య",
    of_label: "నుండి",
    q_jump_lbl: "ప్రశ్నకు వెళ్ళు:",
    auto_advance: "ఆటో-నెక్స్ట్",
    feedback_correct: "సరైన సమాధానం! +1 మార్కు లభించింది",
    feedback_wrong: "తప్పు సమాధానం! (0 మార్కులు) — సరైన అధికారిక సమాధానం:",
    correct_is: "సరైన అధికారిక సమాధానం: ఐచ్ఛికం",
    prev_q: "మునుపటి",
    next_q: "తరువాతి",
    submit_sub: "సబ్జెక్ట్ సబ్మిట్ చేయండి",
    drawer_title: "ప్రశ్నల నావిగేటర్",
    drawer_title_short: "ప్రశ్నలు",
    legend_correct: "సరైనవి",
    legend_wrong: "తప్పులు",
    legend_unanswered: "రాయనివి",
    legend_current: "ప్రస్తుత ప్రశ్న",
    modal_congrats: "అభినందనలు! సబ్జెక్ట్ పరీక్ష పూర్తయింది",
    stat_correct: "సరైనవి (+1)",
    stat_wrong: "తప్పులు (0)",
    stat_accuracy: "ఖచ్చితత్వం",
    btn_next_sub: "తదుపరి సబ్జెక్ట్‌కు వెళ్ళండి",
    btn_review: "సమాధానాలను సమీక్షించండి",
    btn_hub: "హోమ్ పేజీకి వెళ్ళండి",
    btn_back_to_sub: "సబ్జెక్టులు",
    retake_sub: "మళ్లీ రాయండి",
    btn_reset_all: "ప్రాక్టీస్ రీసెట్ చేయండి",
    reset_modal_title: "అన్ని రికార్డులను రీసెట్ చేయాలా?",
    reset_modal_desc: "ఇది మొత్తం 6 సబ్జెక్టులలోని మీ సమాధానాలు, స్కోర్లు మరియు ప్రాక్టీస్ హిస్టరీని శాశ్వతంగా తొలగిస్తుంది. మీరు మళ్ళీ మొదటి నుండి రాయవచ్చు.",
    btn_cancel: "రద్దు చేయి",
    btn_confirm_reset: "అవును, పూర్తిగా రీసెట్ చేయి",
    toast_reset_done: "పరీక్షా రికార్డులన్నీ విజయవంతంగా రీసెట్ చేయబడ్డాయి!",
    btn_reset_sub: "సబ్జెక్ట్ రీసెట్",
    btn_reset_sub_short: "రీసెట్",
    reset_sub_modal_title: "సబ్జెక్ట్ ప్రాక్టీస్ రీసెట్ చేయాలా?",
    reset_sub_modal_desc: "{sub} లోని మీ సమాధానాలు మరియు స్కోరు పూర్తిగా తొలగించబడతాయి. మీరు మొదటి నుండి రాయవచ్చు.",
    btn_confirm_reset_sub: "అవును, సబ్జెక్ట్ రీసెట్ చేయి",
    toast_sub_reset_done: "సబ్జెక్ట్ రికార్డులు విజయవంతంగా రీసెట్ చేయబడ్డాయి!",
    nav_volume: "వాల్యూమ్",
    nav_volume_off: "మ్యూట్",
    nav_theme_dark: "డార్క్",
    nav_theme_light: "లైట్"
  }
};

// Web Audio Sound Synthesizer
class SoundFx {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }
  
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playCorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc1.type = 'triangle';
      osc2.type = 'sine';
      
      osc1.frequency.setValueAtTime(523.25, now);
      osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.08);
      osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.16);
      osc2.frequency.setValueAtTime(1046.50, now);
      
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } catch (e) {}
  }

  playWrong() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.22);
      
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {}
  }
}

// Main App Controller
class App {
  constructor() {
    this.sound = new SoundFx();
    this.uiLang = localStorage.getItem('tet_lang') || 'en';
    this.theme = localStorage.getItem('tet_theme') || 'dark';
    this.questionLangMode = 'both';
    this.autoAdvance = false;
    this.autoAdvanceTimer = null;
    
    this.subjects = [];
    this.currentSubject = null;
    this.allQuestions = [];
    this.currentIndex = 0;
    
    // Per-subject progress: { [subId]: { answers: { [qno]: optionIndex }, score: number } }
    this.savedProgress = JSON.parse(localStorage.getItem('tet_progress') || '{}');
    
    this.initElements();
    this.applyTheme();
    this.updateSoundButton();
    this.updateLangButton();
    this.attachEventListeners();
    this.loadSubjects();
  }

  initElements() {
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.langToggleBtn = document.getElementById('lang-toggle-btn');
    this.soundToggleBtn = document.getElementById('sound-toggle-btn');
    this.homeBrand = document.getElementById('brand-home-link');
    
    this.hubView = document.getElementById('hub-view');
    this.testView = document.getElementById('test-view');
    
    this.subjectsGrid = document.getElementById('subjects-grid');
    this.totalQuestionsStat = document.getElementById('total-questions-stat');
    this.totalSubjectsStat = document.getElementById('total-subjects-stat');
    this.totalCompletedStat = document.getElementById('total-completed-stat');
    this.totalScoreStat = document.getElementById('total-score-stat');
    
    this.testSubjectName = document.getElementById('test-subject-name');
    this.testBackBtn = document.getElementById('test-back-btn');
    this.qnoCounter = document.getElementById('qno-counter');
    this.liveCorrectCount = document.getElementById('live-correct-count');
    this.liveWrongCount = document.getElementById('live-wrong-count');
    
    // Question number strip & quick jump
    this.qStripScroll = document.getElementById('q-strip-scroll');
    this.quickJumpInput = document.getElementById('quick-jump-input');
    this.quickJumpBtn = document.getElementById('quick-jump-btn');
    this.autoAdvanceCheck = document.getElementById('auto-advance-check');
    
    this.questionCard = document.getElementById('question-card');
    this.questionImageBox = document.getElementById('question-image-box');
    this.questionImg = document.getElementById('question-img');
    this.questionTextBox = document.getElementById('question-text-box');
    this.questionTextEn = document.getElementById('question-text-en');
    this.questionTextTe = document.getElementById('question-text-te');
    this.optionsContainer = document.getElementById('options-container');
    
    this.instantFeedback = document.getElementById('instant-feedback');
    this.feedbackText = document.getElementById('feedback-text');
    this.feedbackScore = document.getElementById('feedback-score');
    
    this.prevBtn = document.getElementById('prev-q-btn');
    this.nextBtn = document.getElementById('next-q-btn');
    this.openDrawerBtn = document.getElementById('open-drawer-btn');
    this.submitSubjectBtn = document.getElementById('submit-subject-btn');
    
    this.drawerBackdrop = document.getElementById('drawer-backdrop');
    this.navigatorDrawer = document.getElementById('navigator-drawer');
    this.closeDrawerBtn = document.getElementById('close-drawer-btn');
    this.gridJumpContainer = document.getElementById('grid-jump-container');
    
    this.scoreModal = document.getElementById('score-modal');
    this.modalSubName = document.getElementById('modal-sub-name');
    this.modalBigScore = document.getElementById('modal-big-score');
    this.modalDenom = document.getElementById('modal-denom');
    this.modalCorrectVal = document.getElementById('modal-correct-val');
    this.modalWrongVal = document.getElementById('modal-wrong-val');
    this.modalAccuracyVal = document.getElementById('modal-accuracy-val');
    this.nextSubBtn = document.getElementById('next-sub-btn');
    this.reviewBtn = document.getElementById('review-btn');
    this.returnHubBtn = document.getElementById('return-hub-btn');
    
    this.globalScoreTicker = document.getElementById('global-score-ticker');
    this.globalScoreVal = document.getElementById('global-score-val');

    // Reset Progress Elements
    this.resetProgressBtn = document.getElementById('reset-progress-btn');
    this.resetCurrentSubBtn = document.getElementById('reset-current-sub-btn');
    this.resetModal = document.getElementById('reset-modal');
    this.resetModalTitle = document.getElementById('reset-modal-title');
    this.resetModalDesc = document.getElementById('reset-modal-desc');
    this.cancelResetBtn = document.getElementById('cancel-reset-btn');
    this.confirmResetBtn = document.getElementById('confirm-reset-btn');
    this.resetTargetSubject = null;
    this.toastContainer = document.getElementById('toast-container');
  }

  attachEventListeners() {
    this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    this.langToggleBtn.addEventListener('click', () => this.toggleLanguage());
    this.soundToggleBtn.addEventListener('click', () => this.toggleSound());
    this.homeBrand.addEventListener('click', (e) => {
      e.preventDefault();
      this.showHubView();
    });
    this.testBackBtn.addEventListener('click', () => this.showHubView());
    
    this.prevBtn.addEventListener('click', () => {
      this.sound.playClick();
      this.navigateQuestion(-1);
    });
    this.nextBtn.addEventListener('click', () => {
      this.sound.playClick();
      this.navigateQuestion(1);
    });
    
    this.openDrawerBtn.addEventListener('click', () => this.openDrawer());
    this.closeDrawerBtn.addEventListener('click', () => this.closeDrawer());
    this.drawerBackdrop.addEventListener('click', () => this.closeDrawer());
    
    this.submitSubjectBtn.addEventListener('click', () => this.promptSubmitSubject());
    this.nextSubBtn.addEventListener('click', () => this.proceedToNextSubject());
    this.reviewBtn.addEventListener('click', () => this.closeModal());
    this.returnHubBtn.addEventListener('click', () => {
      this.closeModal();
      this.showHubView();
    });

    // Reset Progress Handlers
    if (this.resetProgressBtn) {
      this.resetProgressBtn.addEventListener('click', () => this.openResetModal());
    }
    if (this.resetCurrentSubBtn) {
      this.resetCurrentSubBtn.addEventListener('click', () => {
        if (this.currentSubject) {
          this.openResetModal(this.currentSubject.id);
        }
      });
    }
    if (this.cancelResetBtn) {
      this.cancelResetBtn.addEventListener('click', () => this.closeResetModal());
    }
    if (this.confirmResetBtn) {
      this.confirmResetBtn.addEventListener('click', () => this.executeReset());
    }
    if (this.resetModal) {
      this.resetModal.addEventListener('click', (e) => {
        if (e.target === this.resetModal) this.closeResetModal();
      });
    }



    // Auto-advance toggle
    if (this.autoAdvanceCheck) {
      this.autoAdvanceCheck.addEventListener('change', (e) => {
        this.autoAdvance = e.target.checked;
      });
    }

    // Quick jump button and enter key
    if (this.quickJumpBtn) {
      this.quickJumpBtn.addEventListener('click', () => this.handleQuickJump());
    }
    if (this.quickJumpInput) {
      this.quickJumpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.handleQuickJump();
      });
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (this.hubView.classList.contains('active')) return;
      if (this.scoreModal.classList.contains('active')) return;
      if (document.activeElement === this.quickJumpInput) return;
      
      if (e.key === 'ArrowLeft') {
        this.navigateQuestion(-1);
      } else if (e.key === 'ArrowRight') {
        this.navigateQuestion(1);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const optIdx = parseInt(e.key);
        this.handleOptionSelect(optIdx);
      } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
        const keyMap = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
        this.handleOptionSelect(keyMap[e.key]);
      }
    });
  }

  handleQuickJump() {
    const val = parseInt(this.quickJumpInput.value);
    if (!isNaN(val) && val >= 1 && val <= this.allQuestions.length) {
      this.sound.playClick();
      this.jumpToQuestion(val - 1);
      this.quickJumpInput.value = '';
    } else {
      alert(`Please enter a valid question number between 1 and ${this.allQuestions.length}`);
    }
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    this.updateThemeButton();
  }

  updateThemeButton() {
    const iconEl = document.getElementById('theme-icon');
    const labelEl = document.getElementById('theme-label');
    const isEn = this.uiLang === 'en';
    const isDark = this.theme === 'dark';
    
    if (iconEl) iconEl.textContent = isDark ? '☀️' : '🌙';
    if (labelEl) {
      if (isEn) {
        labelEl.textContent = isDark ? 'Dark' : 'Light';
      } else {
        labelEl.textContent = isDark ? 'డార్క్' : 'లైట్';
      }
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('tet_theme', this.theme);
    this.applyTheme();
    this.sound.playClick();
  }

  updateSoundButton() {
    const iconEl = document.getElementById('sound-icon');
    const labelEl = document.getElementById('sound-label');
    const isEn = this.uiLang === 'en';
    
    if (iconEl) iconEl.textContent = this.sound.enabled ? '🔊' : '🔇';
    if (labelEl) {
      if (this.sound.enabled) {
        labelEl.textContent = isEn ? 'Volume' : 'వాల్యూమ్';
      } else {
        labelEl.textContent = isEn ? 'Muted' : 'మ్యూట్';
      }
    }
    if (this.soundToggleBtn) {
      this.soundToggleBtn.classList.toggle('is-muted', !this.sound.enabled);
    }
  }

  toggleSound() {
    this.sound.enabled = !this.sound.enabled;
    this.updateSoundButton();
  }

  updateLangButton() {
    const labelEl = document.getElementById('lang-label');
    if (labelEl) {
      labelEl.textContent = this.uiLang === 'en' ? 'తెలుగు' : 'English';
    }
  }

  toggleLanguage() {
    this.uiLang = this.uiLang === 'en' ? 'te' : 'en';
    localStorage.setItem('tet_lang', this.uiLang);
    this.updateLocalization();
    this.sound.playClick();
  }

  updateLocalization() {
    const t = I18N[this.uiLang];
    document.documentElement.setAttribute('lang', this.uiLang);
    
    // Fix Telugu font rendering in header if Telugu selected
    const brandTitleEl = document.querySelector('[data-i18n="brand_title"]');
    if (brandTitleEl) {
      if (this.uiLang === 'te') {
        brandTitleEl.classList.add('is-telugu');
      } else {
        brandTitleEl.classList.remove('is-telugu');
      }
    }

    this.updateLangButton();
    this.updateThemeButton();
    this.updateSoundButton();
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    this.renderSubjectCards();
    
    if (this.currentSubject) {
      const subTitle = this.uiLang === 'te' ? this.currentSubject.title_te : this.currentSubject.title;
      this.testSubjectName.textContent = subTitle;
      this.updateProgressCounters();
    }
  }

  async loadSubjects() {
    try {
      const res = await fetch('data/subjects.json');
      this.subjects = await res.json();
      this.renderSubjectCards();
      this.updateGlobalStats();
      this.updateLocalization();
    } catch (e) {
      console.error("Failed to load subjects:", e);
    }
  }

  renderSubjectCards() {
    if (!this.subjectsGrid) return;
    this.subjectsGrid.innerHTML = '';
    const t = I18N[this.uiLang];
    
    this.subjects.forEach(sub => {
      const prog = this.savedProgress[sub.id] || { answers: {}, score: 0 };
      const answeredCount = Object.keys(prog.answers).length;
      const pct = Math.round((answeredCount / sub.total_questions) * 100);
      
      const card = document.createElement('div');
      card.className = 'subject-card';
      card.style.setProperty('--sub-gradient', sub.gradient);
      
      const title = this.uiLang === 'te' ? sub.title_te : sub.title;
      const desc = this.uiLang === 'te' ? sub.description_te : sub.description;
      const btnText = answeredCount > 0 ? t.resume_test : t.start_test;
      
      card.innerHTML = `
        <div class="subject-card-glow"></div>
        <div class="subject-card-top">
          <div class="subject-icon-box">${sub.icon}</div>
          <div class="subject-count-badge">${sub.total_questions} ${t.questions_count}</div>
        </div>
        <h3 class="subject-title ${this.uiLang === 'te' ? 'telugu-font' : ''}">${title}</h3>
        <p class="subject-desc ${this.uiLang === 'te' ? 'telugu-font' : ''}">${desc}</p>
        <div class="subject-progress-box">
          <div class="progress-labels">
            <span>${answeredCount} / ${sub.total_questions} Answered</span>
            <span>${pct}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${pct}%"></div>
          </div>
        </div>
        <div class="subject-card-actions">
          <button class="subject-start-btn" data-sub-id="${sub.id}">
            <span>${btnText}</span>
            <span>→</span>
          </button>
          ${answeredCount > 0 ? `
            <button class="subject-card-reset-btn" data-reset-sub-id="${sub.id}" title="${t.btn_reset_sub}">
              <span>🔄</span>
              <span>${t.btn_reset_sub_short}</span>
            </button>
          ` : ''}
        </div>
      `;
      
      card.addEventListener('click', (e) => {
        const resetBtn = e.target.closest('.subject-card-reset-btn');
        if (resetBtn) {
          e.stopPropagation();
          const targetSubId = resetBtn.dataset.resetSubId || sub.id;
          this.openResetModal(targetSubId);
          return;
        }
        this.sound.playClick();
        this.startSubject(sub.id);
      });
      
      this.subjectsGrid.appendChild(card);
    });
  }

  updateGlobalStats() {
    let grandTotal = 0;
    let completedTotal = 0;
    let totalScore = 0;
    
    this.subjects.forEach(sub => {
      grandTotal += sub.total_questions;
      const p = this.savedProgress[sub.id];
      if (p) {
        completedTotal += Object.keys(p.answers).length;
        totalScore += (p.score || 0);
      }
    });

    if (this.totalQuestionsStat) this.totalQuestionsStat.textContent = grandTotal.toLocaleString();
    if (this.totalSubjectsStat) this.totalSubjectsStat.textContent = this.subjects.length;
    if (this.totalCompletedStat) this.totalCompletedStat.textContent = completedTotal.toLocaleString();
    if (this.totalScoreStat) this.totalScoreStat.textContent = `+${totalScore.toLocaleString()}`;
    if (this.globalScoreVal) this.globalScoreVal.textContent = `+${totalScore}`;
  }

  async startSubject(subId, targetQno = null) {
    const sub = this.subjects.find(s => s.id === subId);
    if (!sub) return;
    this.currentSubject = sub;
    
    try {
      const res = await fetch(`data/${subId}.json`);
      this.allQuestions = await res.json();
      
      if (!this.savedProgress[subId]) {
        this.savedProgress[subId] = { answers: {}, score: 0 };
      }
      
      if (targetQno) {
        const foundIdx = this.allQuestions.findIndex(q => q.qno === targetQno);
        this.currentIndex = foundIdx !== -1 ? foundIdx : 0;
      } else {
        const userAnswers = this.savedProgress[subId].answers;
        let firstUnanswered = this.allQuestions.findIndex(q => userAnswers[q.qno] === undefined);
        this.currentIndex = firstUnanswered !== -1 ? firstUnanswered : 0;
      }
      
      this.showTestView();
      this.renderQuestionStrip();
      this.renderCurrentQuestion();
      this.updateProgressCounters();
    } catch (e) {
      console.error(`Error loading subject ${subId}:`, e);
    }
  }

  showHubView() {
    if (this.autoAdvanceTimer) clearTimeout(this.autoAdvanceTimer);
    this.testView.classList.remove('active');
    this.hubView.classList.add('active');
    this.currentSubject = null;

    this.renderSubjectCards();
    this.updateGlobalStats();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openResetModal(subId = null) {
    this.sound.playClick();
    this.resetTargetSubject = subId;
    const t = I18N[this.uiLang];
    
    if (subId) {
      const sub = this.subjects.find(s => s.id === subId);
      const subName = sub ? (this.uiLang === 'te' ? sub.title_te : sub.title) : '';
      if (this.resetModalTitle) {
        this.resetModalTitle.textContent = `${t.btn_reset_sub}: ${subName}`;
      }
      if (this.resetModalDesc) {
        this.resetModalDesc.textContent = t.reset_sub_modal_desc.replace('{sub}', subName);
      }
      if (this.confirmResetBtn) {
        this.confirmResetBtn.textContent = t.btn_confirm_reset_sub;
      }
    } else {
      if (this.resetModalTitle) {
        this.resetModalTitle.textContent = t.reset_modal_title;
      }
      if (this.resetModalDesc) {
        this.resetModalDesc.textContent = t.reset_modal_desc;
      }
      if (this.confirmResetBtn) {
        this.confirmResetBtn.textContent = t.btn_confirm_reset;
      }
    }
    
    if (this.resetModal) this.resetModal.classList.add('active');
  }

  closeResetModal() {
    this.sound.playClick();
    if (this.resetModal) this.resetModal.classList.remove('active');
    this.resetTargetSubject = null;
  }

  executeReset() {
    const targetSubId = this.resetTargetSubject;
    this.closeResetModal();
    const t = I18N[this.uiLang];
    
    if (targetSubId) {
      delete this.savedProgress[targetSubId];
      localStorage.setItem('tet_progress', JSON.stringify(this.savedProgress));
      
      // If currently practicing this subject in test view, reset position & UI
      if (this.currentSubject && this.currentSubject.id === targetSubId) {
        this.currentIndex = 0;
        this.renderQuestionStrip();
        this.renderCurrentQuestion();
        this.updateProgressCounters();
      }
      
      this.renderSubjectCards();
      this.updateGlobalStats();
      this.sound.playCorrect();
      this.showToast(t.toast_sub_reset_done);
    } else {
      localStorage.removeItem('tet_progress');
      this.savedProgress = {};
      if (this.currentSubject) {
        this.currentIndex = 0;
        this.renderQuestionStrip();
        this.renderCurrentQuestion();
        this.updateProgressCounters();
      }
      this.renderSubjectCards();
      this.updateGlobalStats();
      this.sound.playCorrect();
      this.showToast(t.toast_reset_done);
    }
  }

  showToast(message) {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'app-toast';
    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  showTestView() {
    this.hubView.classList.remove('active');
    this.testView.classList.add('active');
    const subTitle = this.uiLang === 'te' ? this.currentSubject.title_te : this.currentSubject.title;
    this.testSubjectName.textContent = subTitle;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isAnswerCorrect(q, ans) {
    if (ans === undefined || ans === null) return false;
    if (ans === q.correct) return true;
    const userOptText = (q.options[ans - 1] || '').trim().toLowerCase();
    const correctOptText = (q.options[q.correct - 1] || '').trim().toLowerCase();
    return userOptText !== '' && userOptText === correctOptText;
  }

  // Render Horizontal Question Number Navigation Strip
  renderQuestionStrip() {
    if (!this.qStripScroll) return;
    this.qStripScroll.innerHTML = '';
    const subProg = this.savedProgress[this.currentSubject.id] || { answers: {} };
    
    this.allQuestions.forEach((q, idx) => {
      const pill = document.createElement('button');
      pill.className = 'q-strip-pill';
      pill.id = `q-strip-pill-${idx}`;
      pill.textContent = q.qno;
      
      if (idx === this.currentIndex) {
        pill.classList.add('current');
      }
      
      const userAns = subProg.answers[q.qno];
      if (userAns !== undefined) {
        if (this.isAnswerCorrect(q, userAns)) {
          pill.classList.add('correct');
        } else {
          pill.classList.add('wrong');
        }
      }

      pill.addEventListener('click', () => {
        this.sound.playClick();
        this.jumpToQuestion(idx);
      });

      this.qStripScroll.appendChild(pill);
    });

    this.scrollPillIntoView(this.currentIndex);
  }

  updateQuestionStripPills() {
    const subProg = this.savedProgress[this.currentSubject.id] || { answers: {} };
    
    this.allQuestions.forEach((q, idx) => {
      const pill = document.getElementById(`q-strip-pill-${idx}`);
      if (!pill) return;
      
      pill.className = 'q-strip-pill';
      if (idx === this.currentIndex) {
        pill.classList.add('current');
      }
      
      const userAns = subProg.answers[q.qno];
      if (userAns !== undefined) {
        if (this.isAnswerCorrect(q, userAns)) {
          pill.classList.add('correct');
        } else {
          pill.classList.add('wrong');
        }
      }
    });

    this.scrollPillIntoView(this.currentIndex);
  }

  scrollPillIntoView(idx) {
    const pill = document.getElementById(`q-strip-pill-${idx}`);
    if (pill && this.qStripScroll) {
      const scrollLeft = pill.offsetLeft - (this.qStripScroll.clientWidth / 2) + (pill.clientWidth / 2);
      this.qStripScroll.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }

  renderCurrentQuestion() {
    if (this.autoAdvanceTimer) clearTimeout(this.autoAdvanceTimer);
    if (!this.allQuestions.length) return;
    const q = this.allQuestions[this.currentIndex];
    const subProg = this.savedProgress[this.currentSubject.id];
    const selectedOpt = subProg.answers[q.qno];
    const isAnswered = selectedOpt !== undefined;
    
    // 1. QUESTION IMAGE SNIPPET (Featured for All Questions)
    if (q.image) {
      this.questionImageBox.style.display = 'block';
      this.questionImg.loading = 'eager';
      this.questionImg.fetchPriority = 'high';
      this.questionImg.src = q.image;
      this.questionImg.alt = `Question ${q.qno}`;
      this.questionTextBox.style.display = 'none';
      this.questionImg.onerror = () => {
        if (this.questionImg.src.includes('.webp')) {
          this.questionImg.src = this.questionImg.src.replace('.webp', '.png');
        } else {
          this.questionImageBox.style.display = 'none';
          this.questionTextBox.style.display = 'block';
        }
      };
    } else {
      this.questionImageBox.style.display = 'none';
      this.questionTextBox.style.display = 'block';
    }

    // Preload next 3 question images for instant zero-lag transitions
    for (let offset = 1; offset <= 3; offset++) {
      const nextQ = this.allQuestions[this.currentIndex + offset];
      if (nextQ && nextQ.image) {
        const preloadImg = new Image();
        preloadImg.src = nextQ.image;
      }
    }

    // 2. Fallback text (if image not present or failed)
    if (!q.image || this.questionTextBox.style.display === 'block') {
      const fullText = q.question || '';
      const textLines = fullText.split('\n');
      let enText = '';
      let teText = '';
      textLines.forEach(line => {
        if (/[\u0C00-\u0C7F]/.test(line)) {
          teText += (teText ? '\n' : '') + line;
        } else {
          enText += (enText ? '\n' : '') + line;
        }
      });
      if (this.questionLangMode === 'en') {
        this.questionTextEn.style.display = 'block';
        this.questionTextEn.textContent = enText || fullText;
        this.questionTextTe.style.display = 'none';
      } else if (this.questionLangMode === 'te') {
        this.questionTextEn.style.display = 'none';
        this.questionTextTe.style.display = 'block';
        this.questionTextTe.textContent = teText || fullText;
      } else {
        this.questionTextEn.style.display = enText ? 'block' : 'none';
        this.questionTextEn.textContent = enText;
        this.questionTextTe.style.display = teText ? 'block' : 'none';
        this.questionTextTe.textContent = teText || (!enText ? fullText : '');
      }
    }

    // 3. Render 4 Options (Display only Option A, B, C, D - No broken math/fractions content beside it)
    this.optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((optText, idx) => {
      const optIndex = idx + 1;
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.setAttribute('data-opt', optIndex);
      
      let feedbackIcon = '';
      if (isAnswered) {
        btn.disabled = true;
        const isUserCorrect = (selectedOpt === q.correct);

        if (optIndex === selectedOpt) {
          if (isUserCorrect) {
            btn.classList.add('selected-correct');
            feedbackIcon = '✓ +1';
          } else {
            btn.classList.add('selected-wrong');
            feedbackIcon = '✗ 0';
          }
        } else if (optIndex === q.correct) {
          btn.classList.add('revealed-correct');
          feedbackIcon = '★ Correct';
        }
      }

      const optLabel = this.uiLang === 'te' ? `ఐచ్ఛికం (${letters[idx]})` : `Option (${letters[idx]})`;

      btn.innerHTML = `
        <span class="opt-pill">(${letters[idx]})</span>
        <span class="opt-text">${optLabel}</span>
        <span class="opt-feedback-icon">${feedbackIcon}</span>
      `;

      if (!isAnswered) {
        btn.addEventListener('click', () => this.handleOptionSelect(optIndex));
      }

      this.optionsContainer.appendChild(btn);
    });

    // 4. Instant Feedback Banner
    this.renderFeedbackBanner(isAnswered, selectedOpt, q.correct);

    // 5. Update Navigation Buttons
    this.prevBtn.disabled = this.currentIndex === 0;
    this.nextBtn.disabled = this.currentIndex === this.allQuestions.length - 1;
    
    // Update strip and drawer
    this.updateQuestionStripPills();
    this.updateDrawerGrid();
  }

  handleOptionSelect(optIndex) {
    const q = this.allQuestions[this.currentIndex];
    const subProg = this.savedProgress[this.currentSubject.id];
    if (subProg.answers[q.qno] !== undefined) return;
    
    const userOptText = (q.options[optIndex - 1] || '').trim().toLowerCase();
    const correctOptText = (q.options[q.correct - 1] || '').trim().toLowerCase();
    const isCorrect = (optIndex === q.correct) || (userOptText !== '' && userOptText === correctOptText);

    subProg.answers[q.qno] = optIndex;
    if (isCorrect) {
      subProg.score = (subProg.score || 0) + 1;
      this.sound.playCorrect();
      this.animateScoreTicker();
    } else {
      this.sound.playWrong();
    }

    localStorage.setItem('tet_progress', JSON.stringify(this.savedProgress));

    this.renderCurrentQuestion();
    this.updateProgressCounters();
    this.updateGlobalStats();

    // Check Auto-Submit if this was the last question or all answered
    const totalAnswered = Object.keys(subProg.answers).length;
    const totalQuestions = this.allQuestions.length;
    
    if (totalAnswered === totalQuestions) {
      // Auto-submit after a brief delay
      setTimeout(() => {
        this.showSubjectResultModal();
      }, 1200);
      return;
    }

    // Auto-Advance to next question if enabled
    if (this.autoAdvance && this.currentIndex < this.allQuestions.length - 1) {
      this.autoAdvanceTimer = setTimeout(() => {
        this.navigateQuestion(1);
      }, 1200);
    }
  }

  animateScoreTicker() {
    if (this.globalScoreTicker) {
      this.globalScoreTicker.classList.remove('bounce');
      void this.globalScoreTicker.offsetWidth;
      this.globalScoreTicker.classList.add('bounce');
    }
  }

  renderFeedbackBanner(isAnswered, selectedOpt, correctOpt) {
    if (!isAnswered) {
      this.instantFeedback.style.display = 'none';
      return;
    }
    const t = I18N[this.uiLang];
    this.instantFeedback.style.display = 'flex';
    this.instantFeedback.className = 'instant-feedback-card';
    
    const letters = ['A', 'B', 'C', 'D'];
    const correctLetter = letters[correctOpt - 1] || correctOpt;
    
    const q = this.allQuestions[this.currentIndex];
    const userOptText = (q.options[selectedOpt - 1] || '').trim().toLowerCase();
    const correctOptText = (q.options[correctOpt - 1] || '').trim().toLowerCase();
    const isUserCorrect = (selectedOpt === correctOpt) || (userOptText !== '' && userOptText === correctOptText);

    if (isUserCorrect) {
      this.instantFeedback.classList.add('correct');
      this.feedbackText.innerHTML = `<span>✓</span> <span>${t.feedback_correct}</span>`;
      this.feedbackScore.textContent = "+1";
    } else {
      this.instantFeedback.classList.add('wrong');
      this.feedbackText.innerHTML = `<span>✗</span> <span>${t.feedback_wrong} (${correctLetter})</span>`;
      this.feedbackScore.textContent = "+0";
    }
  }

  navigateQuestion(delta) {
    const newIdx = this.currentIndex + delta;
    if (newIdx >= 0 && newIdx < this.allQuestions.length) {
      this.currentIndex = newIdx;
      this.renderCurrentQuestion();
      this.updateProgressCounters();
    }
  }

  jumpToQuestion(index) {
    if (index >= 0 && index < this.allQuestions.length) {
      this.currentIndex = index;
      this.renderCurrentQuestion();
      this.updateProgressCounters();
      this.closeDrawer();
      window.scrollTo({ top: 90, behavior: 'smooth' });
    }
  }

  updateProgressCounters() {
    const t = I18N[this.uiLang];
    const total = this.allQuestions.length;
    const cur = this.currentIndex + 1;
    
    if (this.qnoCounter) {
      this.qnoCounter.textContent = `${t.qno_prefix} ${cur} ${t.of_label} ${total}`;
    }

    const subProg = this.savedProgress[this.currentSubject.id] || { answers: {}, score: 0 };
    let correctCount = 0;
    let wrongCount = 0;

    this.allQuestions.forEach(q => {
      const ans = subProg.answers[q.qno];
      if (ans !== undefined) {
        if (this.isAnswerCorrect(q, ans)) correctCount++;
        else wrongCount++;
      }
    });

    if (this.liveCorrectCount) this.liveCorrectCount.textContent = `✓ ${correctCount}`;
    if (this.liveWrongCount) this.liveWrongCount.textContent = `✗ ${wrongCount}`;
  }

  openDrawer() {
    this.renderDrawerGrid();
    this.drawerBackdrop.classList.add('active');
    this.navigatorDrawer.classList.add('active');
  }

  closeDrawer() {
    this.drawerBackdrop.classList.remove('active');
    this.navigatorDrawer.classList.remove('active');
  }

  renderDrawerGrid() {
    if (!this.gridJumpContainer) return;
    this.gridJumpContainer.innerHTML = '';
    const subProg = this.savedProgress[this.currentSubject.id] || { answers: {} };
    
    this.allQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'grid-q-btn';
      btn.textContent = q.qno;
      
      if (idx === this.currentIndex) {
        btn.classList.add('current');
      }
      
      const userAns = subProg.answers[q.qno];
      if (userAns !== undefined) {
        if (this.isAnswerCorrect(q, userAns)) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
        }
      }

      btn.addEventListener('click', () => {
        this.sound.playClick();
        this.jumpToQuestion(idx);
      });

      this.gridJumpContainer.appendChild(btn);
    });
  }

  updateDrawerGrid() {
    if (!this.navigatorDrawer.classList.contains('active')) return;
    this.renderDrawerGrid();
  }

  promptSubmitSubject() {
    const subProg = this.savedProgress[this.currentSubject.id] || { answers: {} };
    const answeredCount = Object.keys(subProg.answers).length;
    const total = this.allQuestions.length;
    
    if (answeredCount < total) {
      const remaining = total - answeredCount;
      const msg = this.uiLang === 'te' 
        ? `మీరు ఇంకా ${remaining} ప్రశ్నలకు సమాధానం ఇవ్వలేదు. పరీక్షను ముగించాలనుకుంటున్నారా?`
        : `You still have ${remaining} unanswered questions. Do you want to submit and view your score?`;
      if (!confirm(msg)) return;
    }

    this.showSubjectResultModal();
  }

  showSubjectResultModal() {
    if (this.autoAdvanceTimer) clearTimeout(this.autoAdvanceTimer);
    const subProg = this.savedProgress[this.currentSubject.id] || { answers: {}, score: 0 };
    const total = this.allQuestions.length;
    let correct = 0;
    let wrong = 0;

    this.allQuestions.forEach(q => {
      const ans = subProg.answers[q.qno];
      if (ans !== undefined) {
        if (this.isAnswerCorrect(q, ans)) correct++;
        else wrong++;
      }
    });

    const accuracy = (correct + wrong) > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
    const title = this.uiLang === 'te' ? this.currentSubject.title_te : this.currentSubject.title;

    this.modalSubName.textContent = title;
    this.modalBigScore.textContent = `+${correct}`;
    this.modalDenom.textContent = `/ ${total} Marks`;
    this.modalCorrectVal.textContent = correct;
    this.modalWrongVal.textContent = wrong;
    this.modalAccuracyVal.textContent = `${accuracy}%`;

    const nextSubId = this.currentSubject.next_subject;
    const nextSub = this.subjects.find(s => s.id === nextSubId);
    const nextTitle = nextSub ? (this.uiLang === 'te' ? nextSub.title_te : nextSub.title) : '';
    const t = I18N[this.uiLang];
    
    this.nextSubBtn.innerHTML = `
      <span>${t.btn_next_sub}: <strong>${nextTitle}</strong></span>
      <span>→</span>
    `;

    this.scoreModal.classList.add('active');
    this.triggerConfetti();
  }

  closeModal() {
    this.scoreModal.classList.remove('active');
  }

  proceedToNextSubject() {
    this.closeModal();
    const nextSubId = this.currentSubject.next_subject;
    if (nextSubId) {
      this.startSubject(nextSubId);
    } else {
      this.showHubView();
    }
  }

  triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#38bdf8', '#a855f7'];

    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 90,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngle: 0,
        tiltAngleIncremental: (Math.random() * 0.07) + 0.05
      });
    }

    let animationFrame;
    let frames = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frames++;
      for (let i = 0; i < pieces.length; i++) {
        const p = pieces[i];
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.x += Math.sin(p.d);
        p.tilt = Math.sin(p.tiltAngle) * 12;

        ctx.beginPath();
        ctx.lineWidth = p.r / 1.5;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
        ctx.stroke();
      }

      if (frames < 200) {
        animationFrame = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    render();
  }
}

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.tetApp = new App();
});
