import Image from "next/image";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  useDndMonitor,
  useDraggable,
} from "@dnd-kit/core";
import useStore from "../state";
import { CSS, Transform } from "@dnd-kit/utilities";
import {
  Media,
  SearchAnimeQuery,
  useSearchAnimeQuery,
} from "../generated/graphql";
import debounce from "lodash.debounce";
import graphqlRequestClient from "../clints/GQLRequestClient";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { string } from "zod";
import { animeSearchCache } from "../generated/searchCache";
import { LoadingList } from "./loadingList";
import { NotFound } from "./notFound";
import errorMap from "zod/lib/locales/en";

type SelectorCardProps = {
  id: number | undefined;
  titleEng: string | null | undefined;
  titleRom: string | null | undefined;
  isAdult: boolean | null | undefined;
  img: string | null | undefined;
  format: string | null | undefined;
};
const SelectorCard = ({
  id,
  titleEng,
  img,
  isAdult,
  titleRom,
  format,
}: SelectorCardProps) => {
  const checkSelect = (
    activeId: overlayprops | null,
    id: number | undefined
  ) => {
    if (activeId?.id === undefined || activeId?.id === null) return false;
    if (id === undefined || id === null) return false;
    if (activeId?.id !== id) return false;
    return true;
  };
  const activeId = useStore(
    (state) => state.overlayState
    // (b) => {
    //   return checkSelect(b, id);
    // }
  );

  const Id: overlayprops = {
    id,
    titleEng,
    img,
    titleRom,
    format,
  };
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${JSON.stringify(Id)}`,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  console.log("gop", img);
  return (
    <>
      {checkSelect(activeId, id) ? (
        <div
          style={style}
          {...listeners}
          {...attributes}
          ref={setNodeRef}
          id={`${JSON.stringify(Id)}`}
          className="mx-auto flex  h-24 w-[30%] touch-manipulation items-center justify-center"
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
        </div>
      ) : (
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
      )}
    </>
  );
};
const SearchBar = () => {
  const setSearchKey = useStore((state) => state.setSearchkey);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = null;
    if (e.target.value !== "") {
      value = e.target.value;
    }
    setSearchKey(value);
  };
  const handelOnChange = useCallback(debounce(changeHandler, 600), []);
  return (
    <div className=" m-auto w-[90%]">
      <form className=" w-[100%]">
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onChange={handelOnChange}
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search anime"
            required
          />
        </div>
      </form>
    </div>
  );
};

type overlayprops = {
  id: number | undefined;
  titleEng: string | null | undefined;
  titleRom: string | null | undefined;
  img: string | null | undefined;
  format: string | null | undefined;
};
const Overlay = () => {
  const activeId = useStore((state) => state.overlayState);
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
              src={`${
                activeId.img
                  ? activeId.img
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

const ListAnime = () => {
  const items = useStore(
    (state) => state.boardItems,
    (a, b) => {
      for (let i = 0; i < b.length; i++) {
        console.log("ggff", b[i]!.id === a[i]?.id);
        if (b[i]!.id === a[i]?.id) {
          return false;
        }
      }
      return true;
    }
  );
  const searchKey = useStore((state) => state.searchKey);
  const { data, isLoading, error } = useSearchAnimeQuery<
    SearchAnimeQuery,
    Error
  >(
    graphqlRequestClient,
    { search: searchKey }, //animeSearchCache.data
    {
      staleTime: 1000 * 60 * 15,
      initialData: () => {
        if (searchKey === null) return animeSearchCache.data;
        return undefined;
      },
    }
  ); //15min
  if (isLoading)
    return (
      <div>
        <LoadingList />
      </div>
    );
  if (error)
    return (
      <div className=" mr-auto ml-auto mt-8 flex h-96 w-[90%] flex-col items-center justify-center rounded-xl bg-[#031631] text-2xl text-sky-500">{`${error}`}</div>
    );
  if (data?.Page?.media?.length === 0)
    return (
      <div>
        <NotFound searchkey={searchKey} />
      </div>
    );
  const filterlist: { [key: string]: string } = items.reduce(function (
    map: { [key: string]: string },
    obj
  ) {
    map[obj.id] = obj.name!;
    return map;
  },
  {});
  const media: SelectorCardProps[] = [];
  const temp = data?.Page?.media;
  console.log("ggff");

  for (let i = 0; i < temp!.length; i++) {
    const card = temp![i];
    console.log("check", filterlist[card!.id] === undefined);
    if (filterlist[card!.id] !== undefined) continue;
    const tempcard: SelectorCardProps = {
      id: card?.id,
      titleEng: card?.title?.english,
      titleRom: card?.title?.romaji,
      isAdult: card?.isAdult,
      img: card?.coverImage?.extraLarge,
      format: card?.format,
    };
    media.push(tempcard);
  }

  const arr: string[] = media!.map((media: SelectorCardProps, i: number) => {
    return `${media.id}`;
  });

  return (
    <SortableContext id={"A"} items={arr}>
      <>
        <div className=" h-[100%] w-[100%] overflow-x-hidden pt-2 scrollbar-hide">
          {media!.map((media: SelectorCardProps, i: number) => {
            return (
              <SelectorCard
                key={i}
                id={media.id}
                titleEng={media.titleEng}
                titleRom={media.titleRom}
                isAdult={media.isAdult}
                img={media.img}
                format={media.format}
              />
            );
          })}
        </div>
      </>
      <Overlay />
    </SortableContext>
  );
};

type SelectorProps = {
  name: string;
};
const Selector = ({ name }: SelectorProps) => {
  return (
    <div className="row-span-2 grid h-[100vh] w-[100%] grid-flow-row grid-cols-1 grid-rows-[12%] items-start justify-center bg-[#000a18]">
      <SearchBar />
      <ListAnime />
    </div>
  );
};

export { Selector, SearchBar, ListAnime, SelectorCard };
export type { SelectorProps, SelectorCardProps, overlayprops };
