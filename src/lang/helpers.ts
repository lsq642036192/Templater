import { moment } from "obsidian";
import en from "./locale/en";
import zh from "./locale/zh";

const translations: Record<string, any> = {
  en,
  zh
};

export function t(key: string, interpolations?: Record<string, any>): string {
  const locale = moment.locale();
  const lang = locale.split('-')[0]; // Get language code without region (e.g., "zh" from "zh-CN")
  
  // Fallback to English if the language is not supported
  const translation = translations[lang] || translations.en;
  
  // Get the translated text
  let text = getNestedValue(translation, key) || key;
  
  // Interpolate any variables
  if (interpolations) {
    for (const [key, value] of Object.entries(interpolations)) {
      text = text.replace(new RegExp(`\{\{${key}\}\}`, "g"), value.toString());
    }
  }
  
  return text;
}

function getNestedValue(obj: any, key: string): any {
  return key.split(".").reduce((acc, part) => {
    return acc && acc[part] !== undefined ? acc[part] : undefined;
  }, obj);
}