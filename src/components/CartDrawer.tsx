"use client";

import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";

const WHATSAPP_NUMBER = "5491111111111"; // placeholder

export function CartDrawer() {
  const { t, locale, fmtPrice } = useI18n();
  const { open, setOpen, detailedItems, total, count, setQty, remove, clear } = useCart();

  if (!open) return null;

  const checkout = () => {
    if (detailedItems.length === 0) return;
    const lines = detailedItems.map(
      (i) => `• ${i.qty}x ${i.product.name} — ${fmtPrice(i.subtotal)}`,
    );
    const intro =
      locale === "es"
        ? "Hola! Quiero hacer este pedido en Liquoría:"
        : "Hi! I'd like to place this order at Liquoría:";
    const totalLine = `${t.cart.total}: ${fmtPrice(total)}`;
    const text = encodeURIComponent([intro, ...lines, "", totalLine].join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div className="flex-1 bg-black/60" />
      <aside
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-md flex-col bg-neutral-950 shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-neutral-800 p-4">
          <h2 className="text-lg font-bold text-neutral-100">{t.cart.title}</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-2xl text-neutral-400 hover:text-neutral-100"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {detailedItems.length === 0 ? (
            <p className="py-12 text-center text-neutral-400">{t.cart.empty}</p>
          ) : (
            <ul className="space-y-3">
              {detailedItems.map((i) => (
                <li
                  key={i.product.id}
                  className="flex gap-3 rounded border border-neutral-800 bg-neutral-900 p-2"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={i.product.image}
                    alt={i.product.name}
                    className="h-16 w-16 flex-shrink-0 rounded object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-neutral-100">{i.product.name}</p>
                    <p className="text-xs text-neutral-400">{i.product.brand}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setQty(i.product.id, i.qty - 1)}
                        className="h-6 w-6 rounded border border-neutral-700 text-neutral-200"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm text-neutral-100">{i.qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(i.product.id, i.qty + 1)}
                        className="h-6 w-6 rounded border border-neutral-700 text-neutral-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      type="button"
                      onClick={() => remove(i.product.id)}
                      className="text-xs text-neutral-500 hover:text-red-400"
                    >
                      {t.cart.remove}
                    </button>
                    <span className="text-sm font-bold text-amber-400">
                      {fmtPrice(i.subtotal)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-neutral-800 p-4">
          <p className="mb-2 text-xs text-neutral-400">{t.cart.itemsCount(count)}</p>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-neutral-300">{t.cart.total}</span>
            <span className="text-xl font-bold text-amber-400">{fmtPrice(total)}</span>
          </div>
          <button
            type="button"
            onClick={checkout}
            disabled={detailedItems.length === 0}
            className="w-full rounded bg-amber-500 px-4 py-3 font-bold text-neutral-950 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t.cart.checkout}
          </button>
          {detailedItems.length > 0 && (
            <button
              type="button"
              onClick={clear}
              className="mt-2 w-full text-center text-xs text-neutral-500 hover:text-red-400"
            >
              {locale === "es" ? "Vaciar carrito" : "Clear cart"}
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}
