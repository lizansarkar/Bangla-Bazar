import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Role = "Customer" | "Seller" | "Admin" | null;

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface AuthState {
  user: User | null;
  role: Role;
  isAuthenticated: boolean;
  login: (user: User, role: Role) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      role: null,
      isAuthenticated: false,
      login: (user, role) => set({ user, role, isAuthenticated: true }),
      logout: () => set({ user: null, role: null, isAuthenticated: false }),
    }),
    {
      name: "banglabazar-auth",
    }
  )
);
