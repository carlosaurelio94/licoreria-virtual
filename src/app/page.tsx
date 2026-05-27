"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { getBestSellers } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const { t } = useI18n();
  const best = getBestSellers().slice(0, 8);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-400">{t.brand}</p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-neutral-50 md:text-6xl">
            {t.home.heroTitle}
          </h1>
          <p className="mt-4 max-w-xl text-neutral-300 md:text-lg">{t.home.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/catalogo"
              className="rounded bg-amber-500 px-5 py-3 font-semibold text-neutral-950 hover:bg-amber-400"
            >
              {t.home.ctaCatalog}
            </Link>
            <Link
              href="/recomendador"
              className="rounded border border-amber-400 px-5 py-3 font-semibold text-amber-400 hover:bg-amber-400/10"
            >
              {t.home.ctaBot} →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-serif text-3xl font-bold text-neutral-100">{t.home.bestSellers}</h2>
          <Link href="/catalogo" className="text-sm text-amber-400 hover:underline">
            {t.home.seeAll} →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {best.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 font-serif text-3xl font-bold text-neutral-100">{t.home.whyUs}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {t.home.whyUsItems.map((it) => (
            <div
              key={it.title}
              className="rounded-lg border border-neutral-800 bg-neutral-900 p-5"
            >
              <h3 className="mb-2 font-semibold text-amber-400">{it.title}</h3>
              <p className="text-sm text-neutral-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
