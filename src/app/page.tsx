"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { products, type LiquorType } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import {
  ArrowRight,
  AllIcon,
  WhiskyIcon,
  RumIcon,
  TequilaIcon,
  CognacIcon,
  GinIcon,
  WineIcon,
  GlassIcon,
  DiamondIcon,
  CigarIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

type CatKey = "all" | LiquorType;

const CAT_LIST: { id: CatKey; key: string }[] = [
  { id: "all", key: "all" },
  { id: "whisky", key: "whisky" },
  { id: "ron", key: "ron" },
  { id: "tequila", key: "tequila" },
  { id: "cognac", key: "cognac" },
  { id: "gin", key: "gin" },
  { id: "vino", key: "vino" },
];

const CAT_ICONS: Record<CatKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  all: AllIcon,
  whisky: WhiskyIcon,
  vodka: WhiskyIcon,
  ron: RumIcon,
  tequila: TequilaIcon,
  cognac: CognacIcon,
  gin: GinIcon,
  vino: WineIcon,
  cerveza: WineIcon,
  licor: WhiskyIcon,
};

export default function HomePage() {
  const { t } = useI18n();
  const [activeCat, setActiveCat] = useState<CatKey>("all");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const bestSellers = useMemo(
    () =>
      products.filter((p) => p.bestSeller).sort((a, b) => b.rating - a.rating),
    [],
  );

  const visible = useMemo(() => {
    if (activeCat === "all") return bestSellers;
    return bestSellers.filter((p) => p.type === activeCat);
  }, [activeCat, bestSellers]);

  const submitReserva = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  const PILLAR_ICONS = [GlassIcon, DiamondIcon, CigarIcon];

  return (
    <div>
      {/* ───────── Hero ───────── */}
      <section className="hero">
        <div className="bg" />
        <div className="frame">
          <span className="corner c-tl" />
          <span className="corner c-tr" />
          <span className="corner c-bl" />
          <span className="corner c-br" />
        </div>
        <div className="wrap content fade-up">
          <div className="eyebrow caps">
            <span className="rule" />
            <span>{t.home.eyebrow}</span>
          </div>
          <h1>
            {t.home.heroH1Pre}
            <em>{t.home.heroH1Em}</em>
            {t.home.heroH1Post}
          </h1>
          <p className="lead">{t.home.heroLead}</p>
          <div className="cta-row">
            <Link href="#bestsellers" className="btn btn-gold shimmer">
              {t.home.ctaPrimary} <ArrowRight />
            </Link>
            <Link href="/recomendador" className="btn">
              {t.home.ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="wrap hero-meta">
          <div className="row">
            {t.home.stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="n">
                  {s.n}
                  {"plus" in s && s.plus && <span className="plus">{s.plus}</span>}
                </div>
                <div className="l">{s.l}</div>
              </div>
            ))}
            <div className="scroll">
              <span>{t.home.scroll}</span>
              <span className="line" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Categories ───────── */}
      <section className="categories">
        <div className="wrap">
          <div className="row">
            {CAT_LIST.map((c) => {
              const Ico = CAT_ICONS[c.id];
              const name =
                c.id === "all"
                  ? t.home.categoryAll
                  : t.common.typeLabels[c.id as LiquorType];
              return (
                <button
                  key={c.id}
                  className={"cat" + (activeCat === c.id ? " active" : "")}
                  onClick={() => setActiveCat(c.id)}
                  type="button"
                >
                  <div className="ico">
                    <Ico />
                  </div>
                  <div className="name">{name}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Best sellers ───────── */}
      <section id="bestsellers" className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow caps">
                <span className="rule" />
                <span>{t.home.bestEyebrow}</span>
              </div>
              <h2>
                {t.home.bestH2Pre}
                <em>{t.home.bestH2Em}</em>
                {t.home.bestH2Post}
              </h2>
            </div>
            <div className="right">
              <div className="sub">{t.home.bestSub}</div>
              <Link href="/catalogo" className="link-arrow">
                {t.home.bestLink} <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="grid">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Editorial ───────── */}
      <section id="rito" className="editorial">
        <div className="wrap">
          <div className="grid2 section-pad">
            <div className="copy">
              <div
                className="eyebrow caps"
                style={{ color: "var(--gold-text)", display: "flex", alignItems: "center", gap: 14 }}
              >
                <span style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.7 }} />
                <span>{t.home.editEyebrow}</span>
              </div>
              <h2>
                {t.home.editH2Pre}
                <em>{t.home.editH2Em1}</em>
                {t.home.editH2Mid}
                <em>{t.home.editH2Em2}</em>
                {t.home.editH2Post}
              </h2>
              <p>{t.home.editP1}</p>
              <p>{t.home.editP2}</p>
              <div className="signature">
                {t.home.editQuote}
                <span className="name">{t.home.editAuthor}</span>
              </div>
            </div>
            <div className="img">
              <div className="tag">
                <span className="rule" />
                <span className="t">{t.home.editPhotoTag}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Pillars ───────── */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow caps">
                <span className="rule" />
                <span>{t.home.pillarsEyebrow}</span>
              </div>
              <h2>
                {t.home.pillarsH2Pre}
                <em>{t.home.pillarsH2Em}</em>
                {t.home.pillarsH2Post}
              </h2>
            </div>
            <div className="right">
              <div className="sub">{t.home.pillarsSub}</div>
            </div>
          </div>
          <div className="pillars">
            {t.home.pillars.map((it, i) => {
              const Ico = PILLAR_ICONS[i] ?? GlassIcon;
              return (
                <div className="pillar" key={it.n}>
                  <div className="ico">
                    <Ico />
                  </div>
                  <div className="num">{it.n}</div>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Reserva newsletter ───────── */}
      <section className="reserva">
        <div className="wrap inner">
          <div className="caps" style={{ color: "var(--gold-text)" }}>
            {t.home.reservaEyebrow}
          </div>
          <h2>
            {t.home.reservaH2Pre}
            <em>{t.home.reservaH2Em}</em>
            {t.home.reservaH2Post}
          </h2>
          <p>{t.home.reservaP}</p>
          <form onSubmit={submitReserva}>
            <input
              type="email"
              placeholder={sent ? t.home.reservaSent : t.home.reservaPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={sent}
            />
            <button type="submit" disabled={sent}>
              {sent ? t.home.reservaBtnSent : t.home.reservaBtn}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
