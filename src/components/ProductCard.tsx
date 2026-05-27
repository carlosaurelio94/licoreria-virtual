"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { Plus, Laurel, Stars } from "@/components/icons";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { t, locale, fmtNum } = useI18n();
  const { add } = useCart();

  return (
    <article className="card">
      <Link href={`/producto/${product.slug}`} className="img-wrap">
        {product.bestSeller && (
          <span className="badge-best">
            <span className="laurel">
              <Laurel />
            </span>
            <span className="metal-text">{t.product.bestSeller}</span>
          </span>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div className="body">
        <div className="brand-row">
          <span className="b">{product.brand}</span>
          <span className="origin">{product.country[locale]}</span>
        </div>
        <h3>
          <Link href={`/producto/${product.slug}`}>{product.name}</Link>
        </h3>
        <div className="specs">
          <span>{product.abv}% Vol.</span>
          <span>{product.volumeMl} ml</span>
          <span>{product.region[locale]}</span>
        </div>
        <div className="rating">
          <Stars rating={product.rating} />
          <span className="num">{product.rating.toFixed(1)}</span>
        </div>
        <div className="foot">
          <div className="price">
            <span className="cur">ARS</span>
            {fmtNum(product.priceArs)}
          </div>
          <button
            type="button"
            className="btn-add"
            onClick={() => add(product.id)}
            aria-label={t.product.addToCart}
          >
            <Plus />
          </button>
        </div>
      </div>
    </article>
  );
}
