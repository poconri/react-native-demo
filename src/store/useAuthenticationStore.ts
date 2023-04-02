import { create } from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AutenticationState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useAuthenticationStore = create<AutenticationState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string) => set((state) => ({ token })),
      clearToken: () => set((state) => ({ token: null })),
    }),
    {
      name: "auth-storage",
      getStorage: () => AsyncStorage,
    }
  )
);

export default useAuthenticationStore;
