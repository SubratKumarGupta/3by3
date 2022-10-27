import create from "zustand";
import produce from "immer";
import { overlayprops } from "./components/selector";

const useStore = create<{
  boardItems: string[];
  setBoardItems: (newBoardItems: string[]) => void;
  searchKey: string | null;
  setSearchkey: (newSearchKey: string | null) => void;

  overlayState: overlayprops | null;
  setOverlayState: (newstate: overlayprops | null) => void;
}>((set) => ({
  overlayState: null,
  setOverlayState: (newstate: overlayprops | null) =>
    set({ overlayState: newstate }),
  boardItems: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"],
  setBoardItems: (newBoardItems: string[]) =>
    set({ boardItems: newBoardItems }),
  searchKey: null,
  setSearchkey: (newSearchKey: string | null) =>
    set({ searchKey: newSearchKey }),
}));

export default useStore;
