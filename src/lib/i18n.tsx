"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dict, type AnyDict } from "@/data/i18n";
import type { Locale } from "@/data/products";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: AnyDict;
  fmtPrice: (n: number) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("locale")) as
      | Locale
      | null;
    if (saved === "es" || saved === "en") setLocaleState(saved);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") localStorage.setItem("locale", l);
  }, []);

  const t = dict[locale];

  const fmtPrice = useCallback(
    (n: number) => {
      try {
        return new Intl.NumberFormat(locale === "es" ? "es-AR" : "en-US", {
          style: "currency",
          currency: "ARS",
          maximumFractionDigits: 0,
        }).format(n);
      } catch {
        return `$${n}`;
      }
    },
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t, fmtPrice }), [locale, setLocale, t, fmtPrice]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
