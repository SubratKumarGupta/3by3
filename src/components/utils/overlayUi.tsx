import { DragOverlay } from "@dnd-kit/core";

import Image from "next/image";
import { overlayprops } from "./typs";
type props = {
  activeId: overlayprops | null;
  imgSize: string;
};
export const OverlayUi: React.FC<props> = ({ activeId, imgSize }: props) => {
  console.log("jjd", activeId?.img);
  const isNUM = (str: string) => {
    const parsed = parseInt(str, 10);
    if (parsed === undefined) return false;
    return !isNaN(parsed);
  };
  if (`${activeId}`[0] === "B") return null;
  if (isNUM(`${activeId}`)) return null;
  return (
    <DragOverlay wrapperElement={"div"}>
      {activeId ? (
        <div className="touch-manipulation" id={`${activeId.id}`}>
          <div className=" relative aspect-[85/115] h-[100%]">
            <Image
              src={`${
                activeId.img
                  ? activeId.img.replace("large", imgSize)
                  : "https://www.freeiconspng.com/img/23486"
              }`}
              alt={`anime image of ${
                activeId.titleEng ? activeId.titleEng : activeId.titleRom
              }`}
              layout={"fill"}
            />
          </div>
        </div>
      ) : null}
    </DragOverlay>
  );
};
