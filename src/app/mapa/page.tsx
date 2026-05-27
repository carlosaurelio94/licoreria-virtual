"use client";

import dynamic from "next/dynamic";
import { useI18n } from "@/lib/i18n";

const OriginsMap = dynamic(() => import("@/components/OriginsMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[600px] items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-500">
      …
    </div>
  ),
});

export default function MapaPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="font-serif text-3xl font-bold text-neutral-100 md:text-4xl">
        🌍 {t.map.title}
      </h1>
      <p className="mt-2 text-neutral-400">{t.map.subtitle}</p>

      <div className="mt-6 h-[600px] overflow-hidden rounded-lg border border-neutral-800">
        <OriginsMap />
      </div>
    </div>
  );
}
