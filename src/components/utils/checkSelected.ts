import { overlayprops } from "../anime/Overlay";

export const checkSelected = (
  activeId: overlayprops | null,
  id: number | undefined
) => {
  if (activeId?.id === undefined || activeId?.id === null) return false;
  if (id === undefined || id === null) return false;
  if (activeId?.id !== id) return false;
  return true;
};
