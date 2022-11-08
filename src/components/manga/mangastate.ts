import create, { StateCreator } from "zustand";
import { boardItems, overlayprops } from "../utils/typs";
import { persist, PersistOptions } from "zustand/middleware";

type State = {
  boardItems: boardItems[];
  setBoardItems: (newBoardItems: boardItems[]) => void;
  searchKey: string | null;
  setSearchkey: (newSearchKey: string | null) => void;
  overlayState: overlayprops | null;
  setOverlayState: (newstate: overlayprops | null) => void; //change
};
type Persist = (
  config: StateCreator<State>,
  options: PersistOptions<State>
) => StateCreator<State>;
const useMangaDndStor = create<State>(
  (persist as Persist)(
    (set) => ({
      overlayState: null,
      setOverlayState: (newstate: overlayprops | null) =>
        set({ overlayState: newstate }),
      boardItems: [
        {
          id: "B1",
          format: null,
          img: null,
          name: "B1",
        },
        {
          id: "B2",
          format: null,
          img: null,
          name: "B2",
        },
        {
          id: "B3",
          format: null,
          img: null,
          name: "B3",
        },
        {
          id: "B4",
          format: null,
          img: null,
          name: "B4",
        },
        {
          id: "B5",
          format: null,
          img: null,
          name: "B5",
        },
        {
          id: "B6",
          format: null,
          img: null,
          name: "B6",
        },
        {
          id: "B7",
          format: null,
          img: null,
          name: "B7",
        },
        {
          id: "B8",
          format: null,
          img: null,
          name: "B8",
        },
        {
          id: "B9",
          format: null,
          img: null,
          name: "B9",
        },
      ],
      setBoardItems: (newBoardItems: boardItems[]) =>
        set({ boardItems: newBoardItems }),
      searchKey: null,
      setSearchkey: (newSearchKey: string | null) =>
        set({ searchKey: newSearchKey }),
    }),
    { name: "manga-store" }
  )
);

const useMangaDndStore = create<State>((set) => ({
  overlayState: null,
  setOverlayState: (newstate: overlayprops | null) =>
    set({ overlayState: newstate }),
  boardItems: [
    {
      id: "B1",
      format: null,
      img: null,
      name: "B1",
    },
    {
      id: "B2",
      format: null,
      img: null,
      name: "B2",
    },
    {
      id: "B3",
      format: null,
      img: null,
      name: "B3",
    },
    {
      id: "B4",
      format: null,
      img: null,
      name: "B4",
    },
    {
      id: "B5",
      format: null,
      img: null,
      name: "B5",
    },
    {
      id: "B6",
      format: null,
      img: null,
      name: "B6",
    },
    {
      id: "B7",
      format: null,
      img: null,
      name: "B7",
    },
    {
      id: "B8",
      format: null,
      img: null,
      name: "B8",
    },
    {
      id: "B9",
      format: null,
      img: null,
      name: "B9",
    },
  ],
  setBoardItems: (newBoardItems: boardItems[]) =>
    set({ boardItems: newBoardItems }),
  searchKey: null,
  setSearchkey: (newSearchKey: string | null) =>
    set({ searchKey: newSearchKey }),
}));
export type { boardItems };

export default useMangaDndStore;
