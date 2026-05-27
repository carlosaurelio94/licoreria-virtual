"use client";

import dynamic from "next/dynamic";
import { useI18n } from "@/lib/i18n";

const OriginsMap = dynamic(() => import("@/components/OriginsMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: 620,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--carbon)",
        color: "var(--ash)",
        fontSize: 11,
        letterSpacing: "0.24em",
        textTransform: "uppercase",
      }}
    >
      ···
    </div>
  ),
});

export default function MapaPage() {
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
            <span>{t.map.eyebrow}</span>
          </div>
          <h1>
            {t.map.h1Pre}
            <em>{t.map.h1Em}</em>
            {t.map.h1Post}
          </h1>
          <p className="sub">{t.map.sub}</p>
        </div>
      </section>

      <section style={{ padding: "50px 0 110px" }}>
        <div className="wrap">
          <div className="map-frame" style={{ height: 620 }}>
            <OriginsMap />
          </div>
        </div>
      </section>
    </div>
  );
}
