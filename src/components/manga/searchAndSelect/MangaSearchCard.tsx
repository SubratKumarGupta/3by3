import Image from "next/legacy/image";
import { SearchCardProps } from "../../utils/typs";

export type roleAndName = {
  role: string;
  name: string | null;
};

export type MangaSearchCardProps = {
  img: string | null | undefined;
  titleEng: string | null | undefined;
  titleRom: string | null | undefined;
  isAdult: boolean | null | undefined;
  staff: roleAndName[];
  format: string | null | undefined;
  id: number | undefined;
};

export const MangaSearchCard = ({
  style,
  listeners,
  attributes,
  setNodeRef,
  Id,
  img,
  titleEng,
  titleRom,
  id,
  isAdult,
  staff,
}: MangaSearchCardProps & SearchCardProps) => {
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
                ? img.replace("large", "small")
                : "https://www.freeiconspng.com/img/23486"
            }`}
            alt={`anime image of ${titleEng ? titleEng : titleRom}`}
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
              href={`https://anilist.co/manga/${id}`}
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
          <div className="relative mr-[6px] h-[50%] w-[97%] overflow-hidden text-ellipsis text-base text-sky-500 after:absolute after:right-0 after:bottom-0 after:inline-block after:content-[...] ">
            {`${titleEng ? titleEng : titleRom}`}
          </div>
          <div className="overflow flex  w-[95%] flex-col items-start justify-start overflow-hidden overflow-ellipsis whitespace-nowrap text-xs">
            <>
              {staff !== null
                ? staff.map((staff, i) => (
                    <span key={i}>
                      <span className=" text-cyan-600">{staff.role}</span>
                      <span className="text-gray-500">{": " + staff.name}</span>
                    </span>
                  ))
                : null}
            </>
          </div>
        </div>
      </div>
    </>
  );
};
