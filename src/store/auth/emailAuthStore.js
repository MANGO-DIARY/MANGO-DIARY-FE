import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useEmailAuthStore = (set) => ({
  // state
  endAt: null,
  isAuthenticated: false,
  userEmail: '',
  // actions
  setEndAt: (endAt) => set(() => ({ endAt })),
  setIsAuthenticated: (isAuthenticated) => set(() => ({ isAuthenticated })),
  setUserEmail: (email) => set({ userEmail: email }),
});

export default create(useEmailAuthStore);
