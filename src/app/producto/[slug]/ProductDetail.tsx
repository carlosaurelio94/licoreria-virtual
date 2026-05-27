"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import type { Product } from "@/data/products";

const SingleMarkerMap = dynamic(() => import("@/components/SingleMarkerMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-64 items-center justify-center rounded border border-neutral-800 bg-neutral-900 text-sm text-neutral-500">
      …
    </div>
  ),
});

export function ProductDetail({ product }: { product: Product }) {
  const { t, locale, fmtPrice } = useI18n();
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link href="/catalogo" className="mb-4 inline-block text-sm text-amber-400 hover:underline">
        ← {t.nav.catalog}
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative">
          {product.bestSeller && (
            <span className="absolute left-3 top-3 z-10 rounded bg-amber-500 px-2 py-0.5 text-xs font-bold text-neutral-950">
              {t.product.bestSeller}
            </span>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full rounded-lg border border-neutral-800 object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-amber-400">{product.brand}</p>
          <h1 className="font-serif text-3xl font-bold text-neutral-100 md:text-4xl">
            {product.name}
          </h1>

          <div className="mt-2 flex items-center gap-2 text-amber-400">
            {"★".repeat(Math.round(product.rating))}
            <span className="text-sm text-neutral-500">
              {product.rating.toFixed(1)} · {product.reviews.length} {t.product.reviews.toLowerCase()}
            </span>
          </div>

          <p className="mt-4 text-neutral-300">{product.description[locale]}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-xs uppercase text-neutral-500">{t.product.origin}</dt>
              <dd className="text-neutral-100">{product.country[locale]}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-neutral-500">{t.product.region}</dt>
              <dd className="text-neutral-100">{product.region[locale]}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-neutral-500">{t.product.abv}</dt>
              <dd className="text-neutral-100">{product.abv}%</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-neutral-500">{t.product.volume}</dt>
              <dd className="text-neutral-100">{product.volumeMl}ml</dd>
            </div>
          </dl>

          <div className="mt-4 flex flex-wrap gap-2">
            {product.profile.map((p) => (
              <span
                key={p}
                className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs text-amber-300"
              >
                {t.common.perfilLabels[p]}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-end justify-between rounded-lg border border-neutral-800 bg-neutral-900 p-4">
            <div>
              <p className="text-xs uppercase text-neutral-500">{t.product.price}</p>
              <p className="text-3xl font-bold text-amber-400">{fmtPrice(product.priceArs)}</p>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="rounded bg-amber-500 px-5 py-3 font-bold text-neutral-950 hover:bg-amber-400"
            >
              {added ? `✓ ${t.product.added}` : t.product.addToCart}
            </button>
          </div>
        </div>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
          <h2 className="mb-2 font-semibold text-amber-400">🥃 {t.product.tip}</h2>
          <p className="text-sm text-neutral-300">{product.servingTip[locale]}</p>
        </div>
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
          <h2 className="mb-2 font-semibold text-amber-400">🍽 {t.product.pairs}</h2>
          <p className="text-sm text-neutral-300">{product.pairsWith[locale]}</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 font-semibold text-neutral-100">
          📍 {product.country[locale]} — {product.region[locale]}
        </h2>
        <div className="h-64 overflow-hidden rounded-lg border border-neutral-800">
          <SingleMarkerMap
            lat={product.country.lat}
            lng={product.country.lng}
            label={`${product.name} — ${product.region[locale]}`}
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 font-serif text-2xl font-bold text-neutral-100">{t.product.reviews}</h2>
        {product.reviews.length === 0 ? (
          <p className="text-sm text-neutral-500">{t.product.noReviews}</p>
        ) : (
          <ul className="space-y-3">
            {product.reviews.map((r, i) => (
              <li key={i} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold text-neutral-100">{r.author}</span>
                  <span className="text-amber-400">{"★".repeat(r.rating)}</span>
                </div>
                <p className="text-sm text-neutral-300">{r.comment[locale]}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
