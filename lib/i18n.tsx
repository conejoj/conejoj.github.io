"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/**
 * Minimal two-language support (English / Spanish) that works with a static
 * export: the page is prerendered in English, and the visitor's choice is
 * applied in the browser and remembered in localStorage.
 */
export type Lang = "en" | "es";

/** A piece of copy in both languages. */
export type L = { en: string; es: string };

/** Copy that is either the same in both languages (a plain string) or bilingual. */
export type Text = string | L;

const STORAGE_KEY = "lang";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore the visitor's previous choice.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "es") setLangState(saved);
    } catch {
      /* storage unavailable (private mode, etc.) — stay in English */
    }
  }, []);

  // Keep <html lang> in sync so screen readers use the right pronunciation.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

/** Returns a translator: t("plain") → "plain", t({ en, es }) → the current language. */
export function useT() {
  const { lang } = useLang();
  return useCallback(
    (value: Text) => (typeof value === "string" ? value : value[lang]),
    [lang]
  );
}
