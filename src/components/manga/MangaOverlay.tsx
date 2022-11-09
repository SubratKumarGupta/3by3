import { OverlayUi } from "../utils/overlayUi";
import useMangaDndStore from "./mangastate";

export const MangaOverlay = () => {
  const mangaActiveId = useMangaDndStore((state) => state.overlayState);
  return <OverlayUi imgSize="small" activeId={mangaActiveId} />;
};
