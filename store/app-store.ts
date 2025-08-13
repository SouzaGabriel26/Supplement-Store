import { create } from "zustand";

type Role = "customer" | "admin" | null;

interface AppState {
  role: Role;
  setRole: (role: Role) => void;
}

export const useAppStore = create<AppState>((set) => ({
  role: null,
  setRole: (role) => set({ role }),
}));
