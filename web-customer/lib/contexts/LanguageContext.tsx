"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ml";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.lifeHistory": "Life & History",
    "nav.works": "Works",
    "nav.philosophy": "Philosophy",
    "nav.research": "Research",
    "nav.read": "Read",
    "nav.search": "Search",
    "nav.community": "Community",
    "nav.profile": "Profile",
    
    // Hero Section
    "hero.eyebrow": "sree narayana guru digital library",
    "hero.title": "Sree Narayana Guru",
    "hero.subtitle": "Life, Works & Dharma",
    "hero.description": "An authoritative digital archive for the rigorous study of Guru's philosophy, literature, and interventions in social reform.",
    "hero.meta.critical": "Critical editions & translations",
    "hero.meta.scholars": "For scholars, students & institutions",
    "hero.btn.explore": "Explore Works",
    "hero.btn.learn": "Learn the Dharma",
    "hero.link.research": "Browse research & articles →",
    "hero.tagline": "Study • Reflect • Understand",
    
    // Knowledge Pillars
    "knowledge.title": "Knowledge Pillars",
    "knowledge.subtitle": "Core areas of study within the archive.",
    "knowledge.krithis": "Krithis",
    "knowledge.krithis.desc": "Digital library of original poems, philosophical treatises, and translations.",
    "knowledge.dharma": "Dharma",
    "knowledge.dharma.desc": "Analysis of the ethical and philosophical system propounded by the Guru.",
    "knowledge.life": "Life",
    "knowledge.life.desc": "Timeline-based history of Guru's life, travels, and interactions.",
    "knowledge.temples": "Temples",
    "knowledge.temples.desc": "Geography, architectural symbolism, and purpose of consecrated sites.",
    "knowledge.keerthanam": "Keerthanam",
    "knowledge.keerthanam.desc": "Lyrics, meanings, and audio renditions of devotional compositions.",
    "knowledge.disciples": "Disciples & Work",
    "knowledge.disciples.desc": "Profiles of Guru's disciples and their contributions to social reform and philosophy.",
    "knowledge.readMore": "Read more →",
    
    // Thought of the Day
    "quote.text": "One Caste, One Religion, One God for Man.",
    "quote.explanation": "The fundamental unity of humanity transcends all artificial divisions created by society.",
    "quote.save": "Save",
    "quote.share": "Share",
    "quote.listen": "Listen",
    
    // Continue Reading
    "continue.label": "Pick up where you left off",
    "continue.title": "Daiva Dasakam",
    "continue.subtitle": "Verse 4: Like the ocean, waves, and wind...",
    "continue.btn": "Continue Reading",
    
    // Coming Soon Pages
    "comingSoon.title": "Coming Soon",
    "comingSoon.read.desc": "The Reading Library is currently under development. We're building a comprehensive collection of works, translations, and commentaries.",
    "comingSoon.search.desc": "Advanced search functionality is being developed. You'll be able to search across works, articles, translations, and more.",
    "comingSoon.community.desc": "The Community platform is under development. Connect with scholars, discuss philosophy, and share insights with fellow researchers.",
    "comingSoon.launch": "Expected launch: Q2 2024",
    "comingSoon.back": "Back to Home",
    
    // Profile
    "profile.name": "Scholar Account",
    "profile.email": "scholar@anandham.org",
    "profile.joined": "Member since January 2024",
    "profile.edit": "Edit Profile",
    "profile.settings": "Settings",
    "profile.stats.works": "Works Read",
    "profile.stats.articles": "Articles Saved",
    "profile.stats.favorites": "Favorites",
    "profile.details.title": "Account Details",
    "profile.details.name": "Full Name",
    "profile.details.email": "Email Address",
    "profile.details.type": "Account Type",
    "profile.details.typeValue": "Academic Researcher",
    "profile.details.memberSince": "Member Since",
    "profile.activity.title": "Recent Activity",
    "profile.actions.library": "My Library",
    "profile.actions.saved": "Saved Articles",
    "profile.actions.favorites": "Favorites",
    "profile.actions.signOut": "Sign Out",
  },
  ml: {
    // Navigation
    "nav.home": "ഹോം",
    "nav.lifeHistory": "ജീവിതവും ചരിത്രവും",
    "nav.works": "കൃതികൾ",
    "nav.philosophy": "തത്ത്വചിന്ത",
    "nav.research": "ഗവേഷണം",
    "nav.read": "വായന",
    "nav.search": "തിരയൽ",
    "nav.community": "സമൂഹം",
    "nav.profile": "പ്രൊഫൈൽ",
    
    // Hero Section
    "hero.eyebrow": "ശ്രീ നാരായണ ഗുരു ഡിജിറ്റൽ ലൈബ്രറി",
    "hero.title": "ശ്രീ നാരായണ ഗുരു",
    "hero.subtitle": "ജീവിതം, കൃതികൾ, ധർമ്മം",
    "hero.description": "ഗുരുവിന്റെ തത്ത്വചിന്ത, സാഹിത്യം, സാമൂഹിക പരിഷ്കരണങ്ങൾ എന്നിവയുടെ കർശനമായ പഠനത്തിനുള്ള അധികാരപരമായ ഡിജിറ്റൽ ആർക്കൈവ്.",
    "hero.meta.critical": "വിമർശനാത്മക പതിപ്പുകളും വിവർത്തനങ്ങളും",
    "hero.meta.scholars": "പണ്ഡിതർ, വിദ്യാർത്ഥികൾ, സ്ഥാപനങ്ങൾക്ക്",
    "hero.btn.explore": "കൃതികൾ പര്യവേക്ഷണം",
    "hero.btn.learn": "ധർമ്മം പഠിക്കുക",
    "hero.link.research": "ഗവേഷണവും ലേഖനങ്ങളും വീക്ഷിക്കുക →",
    "hero.tagline": "പഠിക്കുക • ചിന്തിക്കുക • മനസ്സിലാക്കുക",
    
    // Knowledge Pillars
    "knowledge.title": "ജ്ഞാന തൂണുകൾ",
    "knowledge.subtitle": "ആർക്കൈവിലെ പഠനത്തിന്റെ പ്രധാന മേഖലകൾ.",
    "knowledge.krithis": "കൃതികൾ",
    "knowledge.krithis.desc": "യഥാർത്ഥ കവിതകൾ, തത്ത്വചിന്താ ഗ്രന്ഥങ്ങൾ, വിവർത്തനങ്ങൾ എന്നിവയുടെ ഡിജിറ്റൽ ലൈബ്രറി.",
    "knowledge.dharma": "ധർമ്മം",
    "knowledge.dharma.desc": "ഗുരു നിർദ്ദേശിച്ച ധാർമ്മികവും തത്ത്വചിന്താപരവുമായ വ്യവസ്ഥയുടെ വിശകലനം.",
    "knowledge.life": "ജീവിതം",
    "knowledge.life.desc": "ഗുരുവിന്റെ ജീവിതം, യാത്രകൾ, ഇടപെടലുകൾ എന്നിവയുടെ സമയരേഖ അടിസ്ഥാനമാക്കിയുള്ള ചരിത്രം.",
    "knowledge.temples": "ക്ഷേത്രങ്ങൾ",
    "knowledge.temples.desc": "പ്രതിഷ്ഠാസ്ഥലങ്ങളുടെ ഭൂമിശാസ്ത്രം, വാസ്തുശില്പ പ്രതീകാത്മകത, ഉദ്ദേശ്യം.",
    "knowledge.keerthanam": "കീർത്തനം",
    "knowledge.keerthanam.desc": "ഭക്തിപരമായ രചനകളുടെ വരികൾ, അർത്ഥങ്ങൾ, ഓഡിയോ പ്രകടനങ്ങൾ.",
    "knowledge.disciples": "ശിഷ്യരും പ്രവർത്തനവും",
    "knowledge.disciples.desc": "ഗുരുവിന്റെ ശിഷ്യരുടെ പ്രൊഫൈലുകളും സാമൂഹിക പരിഷ്കരണത്തിലും തത്ത്വചിന്തയിലും അവരുടെ സംഭാവനകളും.",
    "knowledge.readMore": "കൂടുതൽ വായിക്കുക →",
    
    // Thought of the Day
    "quote.text": "ഒരു ജാതി, ഒരു മതം, മനുഷ്യന് ഒരു ദൈവം.",
    "quote.explanation": "മനുഷ്യത്വത്തിന്റെ അടിസ്ഥാന ഐക്യം സമൂഹം സൃഷ്ടിച്ച എല്ലാ കൃത്രിമ വിഭജനങ്ങളെയും കടന്നുപോകുന്നു.",
    "quote.save": "സൂക്ഷിക്കുക",
    "quote.share": "പങ്കിടുക",
    "quote.listen": "കേൾക്കുക",
    
    // Continue Reading
    "continue.label": "നിങ്ങൾ നിർത്തിയിട്ട സ്ഥലത്ത് നിന്ന് തുടരുക",
    "continue.title": "ദൈവ ദശകം",
    "continue.subtitle": "ശ്ലോകം 4: സമുദ്രം, തിരകൾ, കാറ്റ് പോലെ...",
    "continue.btn": "വായന തുടരുക",
    
    // Coming Soon Pages
    "comingSoon.title": "ഉടൻ വരുന്നു",
    "comingSoon.read.desc": "വായന ലൈബ്രറി നിലവിൽ വികസനത്തിലാണ്. കൃതികൾ, വിവർത്തനങ്ങൾ, വ്യാഖ്യാനങ്ങൾ എന്നിവയുടെ സമഗ്രമായ ശേഖരം ഞങ്ങൾ നിർമ്മിക്കുന്നു.",
    "comingSoon.search.desc": "വിപുലമായ തിരയൽ പ്രവർത്തനം വികസിപ്പിക്കുന്നു. കൃതികൾ, ലേഖനങ്ങൾ, വിവർത്തനങ്ങൾ എന്നിവയിലുടനീളം നിങ്ങൾക്ക് തിരയാനാകും.",
    "comingSoon.community.desc": "സമൂഹ പ്ലാറ്റ്ഫോം വികസനത്തിലാണ്. പണ്ഡിതരുമായി ബന്ധപ്പെടുക, തത്ത്വചിന്ത ചർച്ച ചെയ്യുക, സഹ ഗവേഷകരുമായി ഉൾക്കാഴ്ചകൾ പങ്കിടുക.",
    "comingSoon.launch": "പ്രതീക്ഷിക്കുന്ന ലോഞ്ച്: Q2 2024",
    "comingSoon.back": "ഹോമിലേക്ക് മടങ്ങുക",
    
    // Profile
    "profile.name": "പണ്ഡിത അക്കൗണ്ട്",
    "profile.email": "scholar@anandham.org",
    "profile.joined": "2024 ജനുവരി മുതൽ അംഗം",
    "profile.edit": "പ്രൊഫൈൽ എഡിറ്റ് ചെയ്യുക",
    "profile.settings": "ക്രമീകരണങ്ങൾ",
    "profile.stats.works": "വായിച്ച കൃതികൾ",
    "profile.stats.articles": "സൂക്ഷിച്ച ലേഖനങ്ങൾ",
    "profile.stats.favorites": "പ്രിയങ്കരങ്ങൾ",
    "profile.details.title": "അക്കൗണ്ട് വിശദാംശങ്ങൾ",
    "profile.details.name": "പൂർണ്ണ നാമം",
    "profile.details.email": "ഇമെയിൽ വിലാസം",
    "profile.details.type": "അക്കൗണ്ട് തരം",
    "profile.details.typeValue": "അക്കാദമിക് ഗവേഷകൻ",
    "profile.details.memberSince": "അംഗത്വം",
    "profile.activity.title": "സമീപകാല പ്രവർത്തനം",
    "profile.actions.library": "എന്റെ ലൈബ്രറി",
    "profile.actions.saved": "സൂക്ഷിച്ച ലേഖനങ്ങൾ",
    "profile.actions.favorites": "പ്രിയങ്കരങ്ങൾ",
    "profile.actions.signOut": "സൈൻ ഔട്ട്",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ml")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

