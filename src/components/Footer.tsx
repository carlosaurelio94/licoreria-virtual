"use client";

import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-16 border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-400">
        <p className="mb-2 text-amber-400">⚠ {t.footer.disclaimer}</p>
        <p>
          © {new Date().getFullYear()} {t.brand}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
