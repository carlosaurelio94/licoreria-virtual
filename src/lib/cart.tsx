"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/data/products";

export type CartItem = { productId: string; qty: number };

type Ctx = {
  items: CartItem[];
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  detailedItems: { product: Product; qty: number; subtotal: number }[];
  open: boolean;
  setOpen: (b: boolean) => void;
};

const CartContext = createContext<Ctx | null>(null);
const KEY = "liquoria.cart.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const add = useCallback((id: string, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === id);
      if (existing) {
        return prev.map((i) => (i.productId === id ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { productId: id, qty }];
    });
    setOpen(true);
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.productId === id ? { ...i, qty: Math.max(0, qty) } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const detailedItems = useMemo(() => {
    return items
      .map((i) => {
        const product = products.find((p) => p.id === i.productId);
        if (!product) return null;
        return { product, qty: i.qty, subtotal: product.priceArs * i.qty };
      })
      .filter((x): x is { product: Product; qty: number; subtotal: number } => x !== null);
  }, [items]);

  const count = items.reduce((acc, i) => acc + i.qty, 0);
  const total = detailedItems.reduce((acc, i) => acc + i.subtotal, 0);

  const value = useMemo(
    () => ({ items, add, remove, setQty, clear, count, total, detailedItems, open, setOpen }),
    [items, add, remove, setQty, clear, count, total, detailedItems, open],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
