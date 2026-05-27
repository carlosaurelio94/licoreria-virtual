"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Decanter } from "@/components/icons";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="site">
      <div className="wrap">
        <div className="top">
          <div className="about">
            <Link href="/" className="brand" style={{ marginBottom: 22 }}>
              <span className="glyph">
                <Decanter />
              </span>
              <span className="word">
                {t.brand.line1}
                <span className="amp">{t.brand.italic}</span>
                {t.brand.line2}
              </span>
            </Link>
            <p>{t.footer.about}</p>
            <p style={{ fontSize: 12 }}>{t.footer.address}</p>
          </div>
          <div>
            <h4>{t.footer.colTienda}</h4>
            <div className="links">
              <Link href="/#bestsellers">{t.footer.tiendaLinks[0]}</Link>
              <Link href="/catalogo">{t.footer.tiendaLinks[1]}</Link>
              <Link href="/catalogo">{t.footer.tiendaLinks[2]}</Link>
              <Link href="/catalogo">{t.footer.tiendaLinks[3]}</Link>
            </div>
          </div>
          <div>
            <h4>{t.footer.colCasa}</h4>
            <div className="links">
              <Link href="/#rito">{t.footer.casaLinks[0]}</Link>
              <Link href="/#rito">{t.footer.casaLinks[1]}</Link>
              <Link href="/mapa">{t.footer.casaLinks[2]}</Link>
              <Link href="/consejos">{t.footer.casaLinks[3]}</Link>
            </div>
          </div>
          <div>
            <h4>{t.footer.colServicio}</h4>
            <div className="links">
              <a href="#">{t.footer.servicioLinks[0]}</a>
              <a href="#">{t.footer.servicioLinks[1]}</a>
              <a href="#">{t.footer.servicioLinks[2]}</a>
              <a href="#">{t.footer.servicioLinks[3]}</a>
            </div>
          </div>
        </div>
        <div className="legal">
          <div className="disc">{t.footer.disclaimer}</div>
          <div>© {new Date().getFullYear()} Liquoría — {t.footer.rights}</div>
        </div>
      </div>
    </footer>
  );
}
