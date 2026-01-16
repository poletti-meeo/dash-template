import { createStore } from '@/utils/misc';

interface AuthStore {
  authLoading: boolean;
  setAuthLoading: (val: boolean) => void;
}

export const useAuthStore = createStore<AuthStore>((set) => ({
  authLoading: false,
  setAuthLoading: (val) => {
    set(() => ({
      authLoading: val,
    }));
  },
}));
