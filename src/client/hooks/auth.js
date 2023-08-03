import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";
const initialState = {
  token: null,
  userId: null,

};
const authFnx = (set, get) => {
  return {
    setUserId: (userId) =>
      set((state) => {
        state.userId = userId;
      }),
    setToken: (token) =>
      set((state) => {
        state.token = token;
      }),
    logout: () =>
      set((state) => {
        state.token = null;
        state.userId = null;
      }),
  };
};
const useAuthStore = create(
  persist(
    immer((set, get) => ({
      ...initialState,
      ...authFnx(set, get),
    })),
    {
      name: "student-enrollment", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      serialize: (state) => JSON.stringify(state),
      deserialize: (state) => JSON.parse(state),
    }
  )
);
export default useAuthStore;
