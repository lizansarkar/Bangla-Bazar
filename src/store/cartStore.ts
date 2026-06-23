import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

interface CartState {
  items: CartItem[];
  promoCode: string;
  promoDiscount: number;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  applyPromo: (code: string) => void;
  removePromo: () => void;
  totalItems: () => number;
  subtotal: () => number;
  shipping: () => number;
  tax: () => number;
  discount: () => number;
  total: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      promoCode: "",
      promoDiscount: 0,
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            items: currentItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...currentItems, { ...item, quantity: 1, category: item.category || "" }] });
        }
      },
      removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        }),
      clearCart: () => set({ items: [], promoCode: "", promoDiscount: 0 }),
      applyPromo: (code) => {
        if (code.toUpperCase() === "LUNAVOGUE10") {
          set({ promoCode: code, promoDiscount: 10 });
        } else {
          set({ promoCode: code, promoDiscount: 0 });
        }
      },
      removePromo: () => set({ promoCode: "", promoDiscount: 0 }),
      totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
      subtotal: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0),
      shipping: () => {
        const sub = get().subtotal();
        return sub >= 100 ? 0 : 10;
      },
      tax: () => get().subtotal() * 0.08,
      discount: () => {
        const sub = get().subtotal();
        const discPct = get().promoDiscount;
        return sub * (discPct / 100);
      },
      total: () => {
        const sub = get().subtotal();
        const ship = get().shipping();
        const t = get().tax();
        const disc = get().discount();
        return sub + ship + t - disc;
      },
    }),
    {
      name: "banglabazar-cart",
    }
  )
);
