const translations = {
  en: {
    guideLabel: 'Beginner to Advanced',
    heroTitle: 'Deploy Local AI Power with Openclaw + Ollama',
    heroDescription:
      'A clean, practical roadmap for building your local LLM setup, from first run to production-grade workflow.',
    beginnerTitle: 'Level 1 — Beginner',
    beginnerDesc: 'Install Ollama, pull your first model, and run prompts in minutes.',
    beginnerItem1: 'Install Ollama on your OS',
    beginnerItem2: 'Run llama3 / mistral locally',
    beginnerItem3: 'Use terminal + API basics',
    intermediateTitle: 'Level 2 — Intermediate',
    intermediateDesc: 'Optimize speed, memory, and prompt quality for real projects.',
    intermediateItem1: 'Model selection strategy',
    intermediateItem2: 'GPU/CPU performance tuning',
    intermediateItem3: 'Prompt template workflow',
    advancedTitle: 'Level 3 — Advanced',
    advancedDesc: 'Build robust local AI systems with automation and integrations.',
    advancedItem1: 'Containerized deployment',
    advancedItem2: 'RAG with vector database',
    advancedItem3: 'Monitoring + fallback orchestration',
    devTitle: 'Developer Information',
    devName: 'Built by: You (Openclaw Developer)',
    devService: 'Available for setup services, consulting, and custom AI workflow implementation.',
    toggle: 'မြန်မာ'
  },
  my: {
    guideLabel: 'အခြေခံမှ အဆင့်မြင့်အထိ',
    heroTitle: 'Openclaw + Ollama နဲ့ Local AI ကို အင်အားပြည့် ထည့်သွင်းအသုံးချပါ',
    heroDescription:
      'ပထမအဆင့် run လုပ်ခြင်းမှ production-grade workflow အထိ သင့် local LLM setup ကို လက်တွေ့ကျကျ တည်ဆောက်နိုင်မည့် လမ်းညွှန်ချက်များ။',
    beginnerTitle: 'အဆင့် ၁ — အခြေခံ',
    beginnerDesc: 'Ollama တင်ပြီး model ကို ဆွဲထုတ်ကာ မိနစ်ပိုင်းအတွင်း prompt များ run လုပ်ပါ။',
    beginnerItem1: 'သင့် OS မှာ Ollama တင်သွင်းခြင်း',
    beginnerItem2: 'llama3 / mistral ကို local မှာ run ခြင်း',
    beginnerItem3: 'Terminal နှင့် API အခြေခံ',
    intermediateTitle: 'အဆင့် ၂ — အလယ်အလတ်',
    intermediateDesc: 'တကယ့် project အတွက် speed၊ memory နှင့် prompt quality တိုးတက်အောင်လုပ်ခြင်း။',
    intermediateItem1: 'Model ရွေးချယ်မှု မဟာဗျူဟာ',
    intermediateItem2: 'GPU/CPU performance tuning',
    intermediateItem3: 'Prompt template workflow',
    advancedTitle: 'အဆင့် ၃ — အဆင့်မြင့်',
    advancedDesc: 'Automation နှင့် integration ပါဝင်သည့် local AI စနစ်ကို ခိုင်မာစွာတည်ဆောက်ခြင်း။',
    advancedItem1: 'Containerized deployment',
    advancedItem2: 'Vector database ဖြင့် RAG',
    advancedItem3: 'Monitoring + fallback orchestration',
    devTitle: 'Developer အချက်အလက်',
    devName: 'တည်ဆောက်သူ: သင် (Openclaw Developer)',
    devService: 'Setup service, consulting နှင့် custom AI workflow implementation များအတွက် ဆက်သွယ်နိုင်ပါသည်။',
    toggle: 'English'
  }
};

let language = 'en';

const elements = document.querySelectorAll('[data-i18n]');
const toggleButton = document.getElementById('lang-toggle');

function applyLanguage() {
  const dict = translations[language];
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const value = dict[key];
    if (value) {
      element.textContent = value;
    }
  });

  toggleButton.textContent = dict.toggle;
  document.documentElement.lang = language === 'my' ? 'my' : 'en';
}

toggleButton.addEventListener('click', () => {
  language = language === 'en' ? 'my' : 'en';
  applyLanguage();
});

applyLanguage();
