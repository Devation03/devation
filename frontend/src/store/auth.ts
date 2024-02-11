import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthStateType {
  authState: { isLoggedIn: boolean; token: string };
  setAuthState: (authState: { isLoggedIn: boolean; token: string }) => void;
  user: { id: string; email: string; name: string };
  setUser: (user: { id: string; email: string; name: string }) => void;
}

export const useAuthStore = create<AuthStateType>()(
  persist(
    (set) => ({
      authState: { isLoggedIn: false, token: "" },
      user: { id: "", email: "", name: "" },
      setAuthState: (authState: { isLoggedIn: boolean; token: string }) =>
        set(() => ({ authState: authState })),
      setUser: (user: { id: string; email: string; name: string }) =>
        set(() => ({ user: user })),
    }),
    {
      name: "a0",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
