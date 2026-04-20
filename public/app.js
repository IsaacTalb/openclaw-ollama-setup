const translations = {
  en: {
    guideLabel: 'Beginner to Advanced + Mega Cheatsheet',
    heroTitle: 'Deploy Local AI Power with Openclaw + Ollama',
    heroDescription:
      'A practical roadmap from first install to production-ready automation with security, memory, and multi-agent workflow.',
    beginnerTitle: 'Level 1 — Beginner',
    beginnerDesc: 'Install Ollama, pull your first model, and run prompts in minutes.',
    beginnerItem1: 'Install Openclaw globally + run onboarding',
    beginnerItem2: 'Connect first channel and launch gateway',
    beginnerItem3: 'Run llama3 / mistral locally via Ollama',
    intermediateTitle: 'Level 2 — Intermediate',
    intermediateDesc: 'Optimize speed, memory, and prompt quality for real projects.',
    intermediateItem1: 'Use openclaw status --all --deep diagnostics',
    intermediateItem2: 'Set model fallbacks + auth providers',
    intermediateItem3: 'Use memory index/search for better context recall',
    advancedTitle: 'Level 3 — Advanced',
    advancedDesc: 'Build robust local AI systems with automation and integrations.',
    advancedItem1: 'Automate recurring tasks with openclaw cron',
    advancedItem2: 'Orchestrate flows + subagents for scale',
    advancedItem3: 'Harden with openclaw security audit --fix',
    cheatTitle: 'Mega Cheatsheet Highlights',
    cheatDesc: 'Fast commands extracted from the Openclaw print cheatsheet (updated Apr 6, 2026).',
    cmdSetupTitle: 'Quick Setup',
    cmdHealthTitle: 'Health & Diagnostics',
    cmdPowerTitle: 'Power Workflow',
    cheatCta: 'Open full printable cheatsheet ↗',
    devTitle: 'Developer Information',
    devName: 'Created by: Isaac Talb',
    devService: 'Full-stack development, VPS maintenance, custom AI workflow integration, and Openclaw/Ollama setup services.',
    portfolioLink: 'Portfolio Website',
    contactLink: 'Contact Page',
    toggle: 'မြန်မာ'
  },
  my: {
    guideLabel: 'အခြေခံမှ အဆင့်မြင့် + Mega Cheatsheet',
    heroTitle: 'Openclaw + Ollama နဲ့ Local AI ကို အင်အားပြည့် ထည့်သွင်းအသုံးချပါ',
    heroDescription:
      'ပထမအဆင့်တင်သွင်းခြင်းကနေ production-ready automation အထိ security, memory နှင့် multi-agent workflow ပါဝင်သည့် လက်တွေ့လမ်းညွှန်။',
    beginnerTitle: 'အဆင့် ၁ — အခြေခံ',
    beginnerDesc: 'Ollama တင်ပြီး model ကို ဆွဲထုတ်ကာ မိနစ်ပိုင်းအတွင်း prompt များ run လုပ်ပါ။',
    beginnerItem1: 'Openclaw ကို global install လုပ်ပြီး onboarding စတင်ပါ',
    beginnerItem2: 'ပထမ channel ချိတ်ပြီး gateway စတင်ပါ',
    beginnerItem3: 'Ollama နဲ့ llama3 / mistral ကို local မှာ run လုပ်ပါ',
    intermediateTitle: 'အဆင့် ၂ — အလယ်အလတ်',
    intermediateDesc: 'တကယ့် project အတွက် speed၊ memory နှင့် prompt quality တိုးတက်အောင်လုပ်ခြင်း။',
    intermediateItem1: 'openclaw status --all --deep ဖြင့် diagnostics စစ်ပါ',
    intermediateItem2: 'Model fallback နှင့် auth provider များ သတ်မှတ်ပါ',
    intermediateItem3: 'Context recall ကောင်းစေရန် memory index/search သုံးပါ',
    advancedTitle: 'အဆင့် ၃ — အဆင့်မြင့်',
    advancedDesc: 'Automation နှင့် integration ပါဝင်သည့် local AI စနစ်ကို ခိုင်မာစွာတည်ဆောက်ခြင်း။',
    advancedItem1: 'openclaw cron ဖြင့် အလုပ်များကို အလိုအလျောက် ပြုလုပ်ပါ',
    advancedItem2: 'Flow + subagent များဖြင့် scale လုပ်ပါ',
    advancedItem3: 'openclaw security audit --fix ဖြင့် secure လုပ်ပါ',
    cheatTitle: 'Mega Cheatsheet အနှစ်ချုပ်',
    cheatDesc: 'Openclaw print cheatsheet (Apr 6, 2026 update) မှ အရေးကြီး command များ။',
    cmdSetupTitle: 'အမြန် Setup',
    cmdHealthTitle: 'Health & Diagnostics',
    cmdPowerTitle: 'Power Workflow',
    cheatCta: 'Printable cheatsheet အပြည့်အစုံဖွင့်မည် ↗',
    devTitle: 'Developer အချက်အလက်',
    devName: 'ဖန်တီးသူ: Isaac Talb',
    devService: 'Full-stack development, VPS maintenance, custom AI workflow integration နှင့် Openclaw/Ollama setup services များ ပံ့ပိုးပေးပါသည်။',
    portfolioLink: 'Portfolio Website',
    contactLink: 'Contact Page',
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
