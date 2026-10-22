import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content } from "@/data/content";
import type { Content, Locale } from "@/data/types";

type Theme = "light" | "dark";

interface Preferences {
  locale: Locale;
  theme: Theme;
  t: Content;
  toggleLocale: () => void;
  toggleTheme: () => void;
}

const PreferencesContext = createContext<Preferences | undefined>(undefined);

function readStored<T extends string>(key: string, allowed: T[]): T | null {
  try {
    const value = localStorage.getItem(key);
    return allowed.includes(value as T) ? (value as T) : null;
  } catch {
    return null;
  }
}

function store(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* modo privado ou storage bloqueado: segue sem persistir */
  }
}

function initialLocale(): Locale {
  return (
    readStored<Locale>("locale", ["pt", "en"]) ??
    (navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en")
  );
}

function initialTheme(): Theme {
  return readStored<Theme>("theme", ["light", "dark"]) ?? "dark";
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    store("locale", locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    store("theme", theme);
  }, [theme]);

  const value = useMemo<Preferences>(
    () => ({
      locale,
      theme,
      t: content[locale],
      toggleLocale: () => setLocale(prev => (prev === "pt" ? "en" : "pt")),
      toggleTheme: () => setTheme(prev => (prev === "dark" ? "light" : "dark")),
    }),
    [locale, theme]
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }
  return context;
}
