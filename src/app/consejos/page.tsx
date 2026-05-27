"use client";

import { useI18n } from "@/lib/i18n";

export default function ConsejosPage() {
  const { t } = useI18n();

  return (
    <div>
      <section className="page-head">
        <div className="wrap inner">
          <div
            className="eyebrow caps"
            style={{ color: "var(--gold-text)", display: "flex", alignItems: "center", gap: 14 }}
          >
            <span style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.7 }} />
            <span>{t.tips.eyebrow}</span>
          </div>
          <h1>
            {t.tips.h1Pre}
            <em>{t.tips.h1Em}</em>
            {t.tips.h1Post}
          </h1>
          <p className="sub">{t.tips.sub}</p>
        </div>
      </section>

      <section style={{ padding: "50px 0 110px" }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {t.tips.items.map((it) => (
              <article key={it.title} className="tip-card">
                <div className="eyebrow">{it.eyebrow}</div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
