"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const { count, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="text-2xl">🥃</span>
          <span className="font-serif text-xl font-bold tracking-wide text-amber-400">
            {t.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/catalogo" className="text-neutral-200 hover:text-amber-400">
            {t.nav.catalog}
          </Link>
          <Link href="/recomendador" className="text-neutral-200 hover:text-amber-400">
            {t.nav.recommender}
          </Link>
          <Link href="/mapa" className="text-neutral-200 hover:text-amber-400">
            {t.nav.map}
          </Link>
          <Link href="/consejos" className="text-neutral-200 hover:text-amber-400">
            {t.nav.tips}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === "es" ? "en" : "es")}
            className="rounded border border-neutral-700 px-2 py-1 text-xs font-medium uppercase text-neutral-200 hover:border-amber-400 hover:text-amber-400"
            aria-label="Toggle language"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative rounded border border-neutral-700 px-3 py-1 text-sm text-neutral-200 hover:border-amber-400 hover:text-amber-400"
          >
            🛒
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-xs font-bold text-neutral-950">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded border border-neutral-700 px-2 py-1 text-sm text-neutral-200 md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-2 border-t border-neutral-800 bg-neutral-950 px-4 py-3 md:hidden">
          <Link href="/catalogo" onClick={() => setMenuOpen(false)} className="py-1 text-neutral-200">
            {t.nav.catalog}
          </Link>
          <Link
            href="/recomendador"
            onClick={() => setMenuOpen(false)}
            className="py-1 text-neutral-200"
          >
            {t.nav.recommender}
          </Link>
          <Link href="/mapa" onClick={() => setMenuOpen(false)} className="py-1 text-neutral-200">
            {t.nav.map}
          </Link>
          <Link
            href="/consejos"
            onClick={() => setMenuOpen(false)}
            className="py-1 text-neutral-200"
          >
            {t.nav.tips}
          </Link>
        </nav>
      )}
    </header>
  );
}
