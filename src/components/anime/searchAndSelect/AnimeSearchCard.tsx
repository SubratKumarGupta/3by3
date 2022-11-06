import { DraggableAttributes } from "@dnd-kit/core";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import Image from "next/image";
import { overlayprops } from "../Overlay";

export const AnimeSearchCard = ({
  style,
  listeners,
  attributes,
  setNodeRef,
  Id,
  img,
  titleEng,
  titleRom,
  id,
  type,
  isAdult,
  format,
}: AnimeSearchCardProps) => {
  return (
    <>
      <div
        style={style}
        {...listeners}
        {...attributes}
        ref={setNodeRef}
        id={`${JSON.stringify(Id)}`}
        className="group relative mx-auto mb-3 flex h-24 w-[85%] touch-manipulation items-center justify-start rounded-r-xl border border-transparent bg-[#031631] text-[#ffffff] hover:border-blue-500"
      >
        <div className=" relative mr-3 aspect-[85/115] h-[100%] touch-manipulation">
          <Image
            quality={40}
            src={`${
              img
                ? img.replace("large", "small")
                : "https://www.freeiconspng.com/img/23486"
            }`}
            alt={`anime image of ${titleEng ? titleEng : titleRom}`}
            layout={"fill"}
          />
        </div>
        <div className=" flex h-[100%]  flex-col justify-around align-top">
          <div className=" absolute top-0 right-0 mt-1 mr-1 hidden h-4 w-4 touch-manipulation hover:bg-blue-700 group-hover:flex">
            <a
              target="_blank"
              rel="noopener"
              className="h-7 w-7"
              onPointerDown={(e) => {
                e.stopPropagation();
                console.log("click a");
              }}
              href={`https://anilist.co/anime/${id}`}
            >
              <Image
                src={"/img/redirect.png"}
                alt={`redirict`}
                layout={"fill"}
              />
            </a>
          </div>
          {isAdult ? (
            <div className=" absolute bottom-0 right-0 mb-2 mr-2 rounded-md bg-red-500 text-white">
              18+
            </div>
          ) : null}
          <div className=" relative mr-[6px] overflow-hidden text-sky-500 after:absolute after:right-0 after:bottom-0 after:inline-block after:content-[...] ">
            {`${titleEng ? titleEng : titleRom}`}
          </div>
          <div className=" ">{format}</div>
        </div>
      </div>
    </>
  );
};
export type AnimeSearchCardProps = {
  style: {
    transform: string | undefined;
  };
  listeners: SyntheticListenerMap | undefined;
  attributes: DraggableAttributes;
  setNodeRef: (element: HTMLElement | null) => void;
  Id: overlayprops;
  img: string | null | undefined;
  titleEng: string | null | undefined;
  titleRom: string | null | undefined;
  isAdult: boolean | null | undefined;
  format: string | null | undefined;
  id: number | undefined;
  type: string;
};
