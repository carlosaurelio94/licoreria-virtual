"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { Decanter, Cart, MenuIcon } from "@/components/icons";

function TopBar() {
  const { t } = useI18n();
  return (
    <div className="topbar">
      <div className="wrap row">
        <div className="marquee">
          <span>{t.topbar.a}</span>
          <span className="dot" />
          <span>{t.topbar.b}</span>
          <span className="dot" />
          <span>{t.topbar.c}</span>
        </div>
        <div className="right">
          <span>{t.topbar.right}</span>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const { count, setOpen } = useCart();
  const [bumped] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: t.nav.reserve, match: pathname === "/" },
    {
      href: "/catalogo",
      label: t.nav.catalog,
      match: pathname.startsWith("/catalogo") || pathname.startsWith("/producto"),
    },
    { href: "/recomendador", label: t.nav.ritual, match: pathname.startsWith("/recomendador") },
    { href: "/mapa", label: t.nav.origins, match: pathname.startsWith("/mapa") },
    { href: "/consejos", label: t.nav.tips, match: pathname.startsWith("/consejos") },
  ];

  return (
    <>
      <TopBar />
      <header className="site">
        <div className="wrap row">
          <Link
            href="/"
            className="brand"
            aria-label="Liquoría"
            onClick={() => setMenuOpen(false)}
          >
            <span className="glyph">
              <Decanter />
            </span>
            <span className="word">
              {t.brand.line1}
              <span className="amp">{t.brand.italic}</span>
              {t.brand.line2}
            </span>
          </Link>
          <nav className="main">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={l.match ? "active" : ""}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="actions">
            <button
              type="button"
              className="lang-btn"
              onClick={() => setLocale(locale === "es" ? "en" : "es")}
              aria-label="Toggle language"
            >
              <span className={locale === "es" ? "on" : ""}>ES</span>
              <span className="sep">/</span>
              <span className={locale === "en" ? "on" : ""}>EN</span>
            </button>
            <button
              type="button"
              className="icon-btn cart-btn"
              onClick={() => setOpen(true)}
              aria-label={t.cart.title}
            >
              <Cart />
              {count > 0 && <span className={"cart-badge" + (bumped ? " bump" : "")}>{count}</span>}
            </button>
            <button
              type="button"
              className="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
