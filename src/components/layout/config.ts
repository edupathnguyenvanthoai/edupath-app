import { create } from "zustand";

type useHeaderStore = {
  title: string;
  setTitle: (s: string) => void;
};

const useHeader = create<useHeaderStore>((set) => ({
  title: "Edupath",
  setTitle: (s) => set({ title: s }),
}));

export { useHeader, type useHeaderStore };
