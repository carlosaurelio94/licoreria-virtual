"use client";

import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { Close, Plus, Minus } from "@/components/icons";

const WHATSAPP_NUMBER = "5491111111111";

export function CartDrawer() {
  const { t, locale, fmtNum, fmtPrice } = useI18n();
  const { open, setOpen, detailedItems, total, count, setQty, remove, clear } = useCart();

  if (!open) return null;

  const checkout = () => {
    if (detailedItems.length === 0) return;
    const lines = detailedItems.map(
      (i) => `• ${i.qty}x ${i.product.name} — ${fmtPrice(i.subtotal)}`,
    );
    const intro =
      locale === "es"
        ? "Hola! Quiero cerrar este pedido en Liquoría:"
        : "Hi! I'd like to close this order at Liquoría:";
    const totalLine = `${t.cart.total}: ${fmtPrice(total)}`;
    const text = encodeURIComponent([intro, ...lines, "", totalLine].join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <>
      <div className="drawer-backdrop" onClick={() => setOpen(false)} role="presentation" />
      <aside className="drawer" role="dialog" aria-modal="true">
        <div className="head">
          <h2>{t.cart.title}</h2>
          <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar">
            <Close />
          </button>
        </div>

        <div className="body">
          {detailedItems.length === 0 ? (
            <p className="empty">{t.cart.empty}</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {detailedItems.map((i) => (
                <li key={i.product.id} className="line-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={i.product.image} alt={i.product.name} />
                  <div>
                    <div className="b">{i.product.brand}</div>
                    <div className="name">{i.product.name}</div>
                    <div className="qty">
                      <button type="button" onClick={() => setQty(i.product.id, i.qty - 1)}>
                        <Minus size={12} />
                      </button>
                      <span className="v">{i.qty}</span>
                      <button type="button" onClick={() => setQty(i.product.id, i.qty + 1)}>
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="right">
                    <div className="sub">{fmtPrice(i.subtotal)}</div>
                    <button
                      type="button"
                      className="rm"
                      onClick={() => remove(i.product.id)}
                    >
                      {t.cart.remove}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="foot">
          <div className="totals">
            <span className="l">
              {t.cart.total}
              {count > 0 && (
                <span style={{ marginLeft: 8, color: "var(--smoke)" }}>
                  · {count} {count === 1 ? t.cart.itemsCountOne : t.cart.itemsCountMany}
                </span>
              )}
            </span>
            <span className="v">
              <span style={{ fontSize: 14, color: "var(--ash)", letterSpacing: "0.1em", marginRight: 6 }}>
                ARS
              </span>
              {fmtNum(total)}
            </span>
          </div>
          <button
            type="button"
            className="btn btn-gold shimmer"
            onClick={checkout}
            disabled={detailedItems.length === 0}
            style={{
              width: "100%",
              justifyContent: "center",
              opacity: detailedItems.length === 0 ? 0.4 : 1,
              cursor: detailedItems.length === 0 ? "not-allowed" : "pointer",
            }}
          >
            {t.cart.checkout}
          </button>
          {detailedItems.length > 0 && (
            <button type="button" className="clear" onClick={clear}>
              {t.cart.clearCart}
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
