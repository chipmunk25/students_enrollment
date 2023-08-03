import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
const initialState = {
  modal: {
    show: false,
    title: "",
    size: "small",
    content: "",
  },
};
const commonFnx = (set) => {
  return {
    changeModal: (modal) =>
      set((state) => {
        state.modal = modal;
      }),
    resetModal: () =>
      set((state) => {
        state.modal = initialState.modal;
      }),
  };
};
const useCommonStore = create(
  immer((set) => ({
    ...initialState,
    ...commonFnx(set),
  }))
);
export default useCommonStore;
