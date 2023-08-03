import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
const initialState = {
  size: "small",
  border: "border-0",
  color: "rose",
  weight: 500,
  lighttext: 500,
  lightbg: 100,
  darktext: 200,
  darkbg: 900,
  orientation: false,
};
const themeFnx = (set, get) => {
  return {
    changeSize: (size) =>
      set((state) => {
        state.size = size;
      }),
    changeBorder: (border) =>
      set((state) => {
        state.border = border;
      }),
    changeColor: (color) =>
      set((state) => {
        state.color = color;
      }),
    changeWeight: (weight) =>
      set((state) => {
        state.weight = weight;
      }),
    changeOrientation: (orientation) =>
      set((state) => {
        state.orientation = orientation;
      }),
  };
};
const useThemeStore = create(
  immer((set, get) => ({
    ...initialState,
    ...themeFnx(set, get),
  }))
);
export default useThemeStore;
