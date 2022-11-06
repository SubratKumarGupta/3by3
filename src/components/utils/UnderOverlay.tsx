import { DraggableAttributes } from "@dnd-kit/core";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { overlayprops } from "../anime/searchAndSelect/searchAndSelect";

export type UnderOverlayProps = {
  style: {
    transform: string | undefined;
  };
  listeners: SyntheticListenerMap | undefined;
  attributes: DraggableAttributes;
  setNodeRef: (element: HTMLElement | null) => void;
  Id: overlayprops;
  type: string;
};

export const UnderOverlay = ({
  style,
  listeners,
  attributes,
  setNodeRef,
  Id,
}: UnderOverlayProps) => {
  return (
    <div
      style={style}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      id={`${JSON.stringify(Id)}`}
      className="mx-auto flex  h-24 w-[30%] touch-manipulation items-center justify-center"
    >
      <div className=" relative mr-3 aspect-[85/115] h-[100%] touch-manipulation"></div>
    </div>
  );
};
