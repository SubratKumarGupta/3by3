import { DragOverlay } from "@dnd-kit/core";
import useAnimeDndStore from "../../state";
import Image from "next/image";

export type overlayprops = {
  id: number | undefined;
  titleEng: string | null | undefined;
  titleRom: string | null | undefined;
  img: string | null | undefined;
  format: string | null | undefined;
};
export const Overlay = () => {
  const activeId = useAnimeDndStore((state) => state.overlayState);
  console.log(activeId);
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
              quality={85}
              src={`${
                activeId.img
                  ? activeId.img.replace("large", "small")
                  : "https://www.freeiconspng.com/img/23486"
              }`}
              alt={`anime image of ${
                activeId.titleEng ? activeId.titleEng : activeId.titleRom
              }`}
              layout={"fill"}
              // height={96}
              // width={70.948}
            />
          </div>
        </div>
      ) : null}
    </DragOverlay>
  );
};
