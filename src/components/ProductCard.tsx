"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { t, locale, fmtPrice } = useI18n();
  const { add } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 transition hover:border-amber-500/60">
      <Link href={`/producto/${product.slug}`} className="relative block aspect-square overflow-hidden bg-neutral-800">
        {product.bestSeller && (
          <span className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-0.5 text-xs font-bold text-neutral-950">
            {t.product.bestSeller}
          </span>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col p-3">
        <p className="text-xs uppercase tracking-wide text-amber-400/80">{product.brand}</p>
        <Link href={`/producto/${product.slug}`} className="font-semibold text-neutral-100 hover:text-amber-400">
          {product.name}
        </Link>
        <p className="mt-1 text-xs text-neutral-400">
          {product.country[locale]} · {product.abv}% · {product.volumeMl}ml
        </p>
        <div className="mt-1 flex items-center gap-1 text-xs text-amber-400">
          {"★".repeat(Math.round(product.rating))}
          <span className="text-neutral-500">({product.rating.toFixed(1)})</span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-bold text-neutral-100">{fmtPrice(product.priceArs)}</span>
          <button
            type="button"
            onClick={() => add(product.id)}
            className="rounded bg-amber-500 px-3 py-1 text-xs font-semibold text-neutral-950 hover:bg-amber-400"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
