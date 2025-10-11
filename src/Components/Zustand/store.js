import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useAppStore = create(
  devtools(
    persist(
      (set, get) => ({
        // 🗂 State
        count: 0,
        user: null,
        products: [],
        loading: false,

        // ➕ Actions
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),

        login: (username) => set({ user: { name: username } }),
        logout: () => set({ user: null }),

        // 🌐 Async Action (API Call)
        fetchProducts: async () => {
          set({ loading: true });
          try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            set({ products: data, loading: false });
          } catch (error) {
            console.error(error);
            set({ loading: false });
          }
        },

        // 🧮 Derived State (Computed)
        productCount: () => get().products.length
      }),
      {
        name: 'app-storage', // Key for localStorage
      }
    )
  )
);
