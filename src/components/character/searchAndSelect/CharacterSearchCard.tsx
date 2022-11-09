import Image from "next/image";
import { SearchCardProps } from "../../utils/typs";

export interface CharacterSearchCardProps extends SearchCardProps {
  img: string | null | undefined;
  name: string;
  titleEng: string | null | undefined;
  titleRom: string | null | undefined;
  id: number | undefined;
  type: string;
}
export const CharacterSearchCard = ({
  style,
  listeners,
  attributes,
  setNodeRef,
  Id,
  img,
  name,
  titleEng,
  titleRom,
  id,
}: CharacterSearchCardProps) => {
  return (
    <>
      <div
        style={style}
        {...listeners}
        {...attributes}
        ref={setNodeRef}
        id={`${JSON.stringify(Id)}`}
        className="group relative mx-auto mb-3 flex h-24 w-[85%] touch-manipulation items-center justify-start  rounded-r-xl border border-transparent bg-[#031631] text-[#ffffff] hover:border-blue-500"
      >
        <div className=" relative mr-3 aspect-[85/115] h-[100%] touch-manipulation">
          <Image
            src={`${
              img
                ? img.replace("large", "medium")
                : "https://www.freeiconspng.com/img/23486"
            }`}
            alt={`image of ${titleEng ? titleEng : titleRom}`}
            layout={"fill"}
          />
        </div>
        <div className=" flex h-[100%] w-full  flex-col justify-around overflow-hidden  align-top">
          <div className=" absolute top-0 right-0 mt-1 mr-1 hidden h-4 w-4 touch-manipulation hover:bg-blue-700 group-hover:flex">
            <a
              target="_blank"
              rel="noreferrer"
              className="h-7 w-7"
              onPointerDown={(e) => {
                e.stopPropagation();
                console.log("click a");
              }}
              href={`https://anilist.co/character/${id}`}
            >
              <Image
                src={"/img/redirect.png"}
                alt={`redirict`}
                layout={"fill"}
              />
            </a>
          </div>
          <div className="relative mr-[6px] w-[97%] overflow-hidden text-ellipsis text-sky-500 after:absolute after:right-0 after:bottom-0 after:inline-block after:content-[...] ">
            {name}
          </div>
          <div className="text-sm">
            <span className="text-gray-500">
              From-{" "}
              <div className="text-cyan-600">{`${
                titleEng ? titleEng : titleRom
              }`}</div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
