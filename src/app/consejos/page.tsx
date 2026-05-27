"use client";

import { useI18n } from "@/lib/i18n";

export default function ConsejosPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="font-serif text-3xl font-bold text-neutral-100 md:text-4xl">
        📖 {t.tips.title}
      </h1>
      <p className="mt-2 text-neutral-400">{t.tips.subtitle}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {t.tips.items.map((it) => (
          <div
            key={it.title}
            className="rounded-lg border border-neutral-800 bg-neutral-900 p-5"
          >
            <h2 className="mb-2 font-semibold text-amber-400">🥃 {it.title}</h2>
            <p className="text-sm leading-relaxed text-neutral-300">{it.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
