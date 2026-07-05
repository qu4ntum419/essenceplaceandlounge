import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItemKind = "room" | "drink";
export type CartItem = { id: string; kind: CartItemKind; name: string; price: number; image: string; quantity: number; meta?: string; };

type CartState = {
  items: CartItem[];
  add: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  remove: (id: string) => void;
  update: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const CartCtx = createContext<CartState | null>(null);
const KEY = "essence-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const value = useMemo<CartState>(() => {
    const count = items.reduce((n, i) => n + i.quantity, 0);
    const subtotal = items.reduce((n, i) => n + i.quantity * i.price, 0);
    return {
      items, count, subtotal, open, setOpen,
      add: (item, qty = 1) => setItems((cur) => {
        const existing = cur.find((i) => i.id === item.id);
        if (existing) return cur.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + qty } : i));
        return [...cur, { ...item, quantity: qty }];
      }),
      remove: (id) => setItems((cur) => cur.filter((i) => i.id !== id)),
      update: (id, qty) => setItems((cur) => qty <= 0 ? cur.filter((i) => i.id !== id) : cur.map((i) => (i.id === id ? { ...i, quantity: qty } : i))),
      clear: () => setItems([]),
    };
  }, [items, open]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function formatNaira(n: number) {
  return "₦" + n.toLocaleString("en-NG");
}