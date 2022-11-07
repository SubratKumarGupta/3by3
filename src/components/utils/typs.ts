import { DraggableAttributes } from "@dnd-kit/core";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

export type overlayprops = {
  id: number | undefined;
  titleEng: string | null | undefined;
  titleRom: string | null | undefined;
  img: string | null | undefined;
  format: string | null | undefined;
};
export type boardItems = {
  id: string;
  img: string | null;
  name: string | null;
  format: string | null;
};
export type SearchCardProps = {
  style: {
    transform: string | undefined;
  };
  listeners: SyntheticListenerMap | undefined;
  attributes: DraggableAttributes;
  setNodeRef: (element: HTMLElement | null) => void;
  Id: overlayprops;
};
