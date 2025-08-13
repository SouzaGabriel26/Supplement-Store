import { CartItem } from "@/lib/types";
import { create } from "zustand";

interface CartState {
  items: CartItem[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (productId) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        return state; // Product already in cart, do nothing
      }
      return { items: [...state.items, { productId, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    })),
  clearCart: () => set({ items: [] }),
}));
