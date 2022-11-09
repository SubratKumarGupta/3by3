import useCharacterDndStore from "./characterstate";

import { OverlayUi } from "../utils/overlayUi";

export const CharacterOverlay = () => {
  const characterActiveId = useCharacterDndStore((state) => state.overlayState);
  return <OverlayUi imgSize="medium" activeId={characterActiveId} />;
};
