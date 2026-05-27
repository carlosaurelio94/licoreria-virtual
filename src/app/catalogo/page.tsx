"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { products, getAllTypes, type LiquorType, type FlavorProfile } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

type Sort = "priceAsc" | "priceDesc" | "rating";

export default function CatalogoPage() {
  const { t } = useI18n();
  const [type, setType] = useState<LiquorType | "all">("all");
  const [profile, setProfile] = useState<FlavorProfile | "all">("all");
  const [sort, setSort] = useState<Sort>("rating");

  const types = useMemo(() => getAllTypes(), []);
  const profiles: FlavorProfile[] = ["seco", "dulce", "ahumado", "frutal", "herbal", "especiado"];

  const filtered = useMemo(() => {
    let list = products;
    if (type !== "all") list = list.filter((p) => p.type === type);
    if (profile !== "all") list = list.filter((p) => p.profile.includes(profile));
    if (sort === "priceAsc") list = [...list].sort((a, b) => a.priceArs - b.priceArs);
    else if (sort === "priceDesc") list = [...list].sort((a, b) => b.priceArs - a.priceArs);
    else list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [type, profile, sort]);

  return (
    <div>
      <section className="page-head">
        <div className="wrap inner">
          <div className="eyebrow caps" style={{ color: "var(--gold-text)", display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.7 }} />
            <span>{t.catalog.eyebrow}</span>
          </div>
          <h1>
            {t.catalog.h1Pre}
            <em>{t.catalog.h1Em}</em>
            {t.catalog.h1Post}
          </h1>
          <p className="sub">{t.catalog.sub}</p>
        </div>
      </section>

      <section style={{ padding: "50px 0 110px" }}>
        <div className="wrap">
          <div className="filters">
            <label>
              {t.catalog.filterType}
              <select
                value={type}
                onChange={(e) => setType(e.target.value as LiquorType | "all")}
              >
                <option value="all">{t.catalog.filterAll}</option>
                {types.map((typ) => (
                  <option key={typ} value={typ}>
                    {t.common.typeLabels[typ]}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {t.catalog.filterProfile}
              <select
                value={profile}
                onChange={(e) => setProfile(e.target.value as FlavorProfile | "all")}
              >
                <option value="all">{t.catalog.filterAll}</option>
                {profiles.map((p) => (
                  <option key={p} value={p}>
                    {t.common.perfilLabels[p]}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {t.catalog.sortBy}
              <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
                <option value="rating">{t.catalog.sortRating}</option>
                <option value="priceAsc">{t.catalog.sortPriceAsc}</option>
                <option value="priceDesc">{t.catalog.sortPriceDesc}</option>
              </select>
            </label>
            <div className="count">
              {filtered.length}{" "}
              {filtered.length === 1 ? t.catalog.countOne : t.catalog.countMany}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p style={{ textAlign: "center", padding: "60px 0", color: "var(--ash)", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 12 }}>
              {t.catalog.empty}
            </p>
          ) : (
            <div className="grid">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
