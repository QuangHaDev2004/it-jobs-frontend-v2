/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkAuth, logout } from "@/services/auth";
import { toast } from "sonner";
import { create } from "zustand";

type AuthState = {
  infoUser: any | null;
  infoCompany: any | null;
  isLogin: boolean;

  clearState: () => void;
  fetchMe: () => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  infoUser: null,
  infoCompany: null,
  isLogin: false,

  clearState: () =>
    set({
      infoUser: null,
      infoCompany: null,
      isLogin: false,
    }),

  fetchMe: async () => {
    try {
      const data = await checkAuth();
      if (data.infoUser) {
        set({
          infoUser: data.infoUser,
          infoCompany: null,
          isLogin: true,
        });
      }

      if (data.infoCompany) {
        set({
          infoUser: null,
          infoCompany: data.infoCompany,
          isLogin: true,
        });
      }
    } catch (error) {
      console.log(error);
      get().clearState();
    }
  },

  logout: async () => {
    try {
      get().clearState();
      const data = await logout();
      toast.success(data.message);
    } catch (error) {
      console.log(error);
    }
  },
}));
