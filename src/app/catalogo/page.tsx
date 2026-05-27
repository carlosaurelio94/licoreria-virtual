"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { products, getAllTypes, type LiquorType, type FlavorProfile } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

type Sort = "priceAsc" | "priceDesc" | "rating";

export default function CatalogoPage() {
  const { t, locale } = useI18n();
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
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 font-serif text-3xl font-bold text-neutral-100 md:text-4xl">
        {t.catalog.title}
      </h1>

      <div className="mb-6 flex flex-wrap gap-3 rounded-lg border border-neutral-800 bg-neutral-900 p-4">
        <label className="flex flex-col text-xs text-neutral-400">
          {t.catalog.filterType}
          <select
            value={type}
            onChange={(e) => setType(e.target.value as LiquorType | "all")}
            className="mt-1 rounded border border-neutral-700 bg-neutral-950 px-2 py-1 text-sm text-neutral-100"
          >
            <option value="all">{t.catalog.filterAll}</option>
            {types.map((typ) => (
              <option key={typ} value={typ}>
                {t.common.typeLabels[typ]}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col text-xs text-neutral-400">
          {t.catalog.filterProfile}
          <select
            value={profile}
            onChange={(e) => setProfile(e.target.value as FlavorProfile | "all")}
            className="mt-1 rounded border border-neutral-700 bg-neutral-950 px-2 py-1 text-sm text-neutral-100"
          >
            <option value="all">{t.catalog.filterAll}</option>
            {profiles.map((p) => (
              <option key={p} value={p}>
                {t.common.perfilLabels[p]}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col text-xs text-neutral-400">
          {t.catalog.sortBy}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="mt-1 rounded border border-neutral-700 bg-neutral-950 px-2 py-1 text-sm text-neutral-100"
          >
            <option value="rating">{t.catalog.sortRating}</option>
            <option value="priceAsc">{t.catalog.sortPriceAsc}</option>
            <option value="priceDesc">{t.catalog.sortPriceDesc}</option>
          </select>
        </label>

        <div className="ml-auto self-end text-xs text-neutral-500">
          {filtered.length} {locale === "es" ? "productos" : "products"}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-neutral-400">{t.catalog.empty}</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
