import useAnimeDndStore from "./animestate";

import { OverlayUi } from "../utils/overlayUi";

export const AnimeOverlay = () => {
  const animeActiveId = useAnimeDndStore((state) => state.overlayState);
  return <OverlayUi activeId={animeActiveId} />;
};
