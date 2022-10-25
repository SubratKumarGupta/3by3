import create from "zustand";
import produce from "immer";

const useStore = create<{
  searchKey: string | null;
  setSearchkey: (newSearchKey: string | null) => void;
}>((set) => ({
  searchKey: null,
  setSearchkey: (newSearchKey: string | null) =>
    set({ searchKey: newSearchKey }),
}));

export default useStore;
