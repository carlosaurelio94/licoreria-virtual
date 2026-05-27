"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { ArrowRight, Laurel, Stars } from "@/components/icons";
import type { Product } from "@/data/products";

const SingleMarkerMap = dynamic(() => import("@/components/SingleMarkerMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: 280,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--carbon)",
        border: "1px solid var(--line-soft)",
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

export function ProductDetail({ product }: { product: Product }) {
  const { t, locale, fmtNum } = useI18n();
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div>
      <section style={{ padding: "40px 0 110px" }}>
        <div className="wrap">
          <Link
            href="/catalogo"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 11,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--gold-text)",
              marginBottom: 36,
            }}
          >
            ← {t.product.backToCatalog}
          </Link>

          <div className="product-detail">
            <div className="photo">
              {product.bestSeller && (
                <span className="badge-best" style={{ zIndex: 3 }}>
                  <span className="laurel">
                    <Laurel />
                  </span>
                  <span className="metal-text">{t.product.bestSeller}</span>
                </span>
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} />
            </div>

            <div>
              <div className="brand-line">{product.brand}</div>
              <h1>{product.name}</h1>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 18,
                }}
              >
                <div style={{ display: "flex", gap: 3, color: "var(--gold-text)" }}>
                  <Stars rating={product.rating} />
                </div>
                <span style={{ color: "var(--smoke)", fontSize: 12 }}>
                  {product.rating.toFixed(1)} · {product.reviews.length}{" "}
                  <span style={{ textTransform: "lowercase" }}>{t.product.reviews}</span>
                </span>
              </div>

              <p style={{ color: "var(--cream)", opacity: 0.88, fontSize: 16, lineHeight: 1.65 }}>
                {product.description[locale]}
              </p>

              <dl className="specs-grid">
                <div>
                  <dt>{t.product.origin}</dt>
                  <dd>{product.country[locale]}</dd>
                </div>
                <div>
                  <dt>{t.product.region}</dt>
                  <dd>{product.region[locale]}</dd>
                </div>
                <div>
                  <dt>{t.product.abv}</dt>
                  <dd>{product.abv}%</dd>
                </div>
                <div>
                  <dt>{t.product.volume}</dt>
                  <dd>{product.volumeMl} ml</dd>
                </div>
              </dl>

              <div className="chips">
                {product.profile.map((p) => (
                  <span key={p} className="chip">
                    {t.common.perfilLabels[p]}
                  </span>
                ))}
              </div>

              <div className="price-row">
                <div>
                  <div
                    style={{
                      fontSize: 10.5,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "var(--ash)",
                      marginBottom: 4,
                    }}
                  >
                    {t.product.price}
                  </div>
                  <div className="price-big">
                    <span className="cur">ARS</span>
                    {fmtNum(product.priceArs)}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleAdd}
                  className="btn btn-gold shimmer"
                >
                  {added ? t.product.added : t.product.addToCart} <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Tip + Pairs */}
          <div className="tip-pair-grid" style={{ marginTop: 60 }}>
            <div className="tip-card">
              <div className="eyebrow">{t.product.tip}</div>
              <h3>{product.name}</h3>
              <p>{product.servingTip[locale]}</p>
            </div>
            <div className="tip-card">
              <div className="eyebrow">{t.product.pairs}</div>
              <h3>{product.region[locale]}</h3>
              <p>{product.pairsWith[locale]}</p>
            </div>
          </div>

          {/* Origin map */}
          <div style={{ marginTop: 60 }}>
            <div
              className="eyebrow caps"
              style={{
                color: "var(--gold-text)",
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 18,
              }}
            >
              <span style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.7 }} />
              <span>
                {product.country[locale]} — {product.region[locale]}
              </span>
            </div>
            <div className="map-frame" style={{ height: 320 }}>
              <SingleMarkerMap
                lat={product.country.lat}
                lng={product.country.lng}
                label={`${product.name} — ${product.region[locale]}`}
              />
            </div>
          </div>

          {/* Reviews */}
          <div style={{ marginTop: 60 }}>
            <div
              className="eyebrow caps"
              style={{
                color: "var(--gold-text)",
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 24,
              }}
            >
              <span style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.7 }} />
              <span>{t.product.reviews}</span>
            </div>
            {product.reviews.length === 0 ? (
              <p style={{ color: "var(--ash)", fontSize: 13 }}>{t.product.noReviews}</p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 16,
                }}
              >
                {product.reviews.map((r, i) => (
                  <div key={i} className="review">
                    <div className="head">
                      <span className="who">{r.author}</span>
                      <span className="st">{"★".repeat(r.rating)}</span>
                    </div>
                    <p>{r.comment[locale]}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
