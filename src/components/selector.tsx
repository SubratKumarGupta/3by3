import { DndContext, DragOverlay, useDraggable } from "@dnd-kit/core";
import useStore from "../state";
import { CSS, Transform } from "@dnd-kit/utilities";
import { SearchAnimeQuery, useSearchAnimeQuery } from "../generated/graphql";
import graphqlRequestClient from "../clints/GQLRequestClient";
import { ChangeEvent, useState } from "react";
import { SortableContext } from "@dnd-kit/sortable";

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
  const string = (transform: Transform | null) => {
    if (!transform) {
      return;
    }
    const { x, y } = transform;
    return `translate3d(${x ? Math.round(x) : 0}px, ${
      y ? Math.round(y) : 0
    }px, 50000px)`;
  };
  const style = {
    transform: string(transform),
  };

  return (
    <div
      style={style}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      id={`${JSON.stringify(Id)}`}
      className="mx-auto mb-3 flex h-24 w-[85%] items-center justify-start bg-cyan-400"
    >
      <img
        className="mr-3 aspect-[85/115] h-[100%]"
        src={`${img ? img : "https://www.freeiconspng.com/img/23486"}`}
        alt={`anime image of ${titleEng ? titleEng : titleRom}`}
      />
      <div>{`${titleEng ? titleEng : titleRom}`}</div>
    </div>
  );
};
const SearchBar = () => {
  const setSearchKey = useStore((state) => state.setSearchkey);
  const handelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const timeout = setTimeout(() => {
      let value = null;
      if (e.target.value !== "") {
        value = e.target.value;
      }
      setSearchKey(value);
    }, 500);
    return () => clearTimeout(timeout);
  };
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
  return (
    <DragOverlay>
      {activeId ? (
        <div id={`${activeId.id}`}>
          <img
            className="mr-3 aspect-[85/115] h-[100%]"
            src={`${
              activeId.img
                ? activeId.img
                : "https://www.freeiconspng.com/img/23486"
            }`}
            alt={`anime image of ${
              activeId.titleEng ? activeId.titleEng : activeId.titleRom
            }`}
          />
        </div>
      ) : null}
    </DragOverlay>
  );
};

const ListAnime = () => {
  const searchKey = useStore((state) => state.searchKey);

  const { data, isLoading, error } = useSearchAnimeQuery<
    SearchAnimeQuery,
    Error
  >(graphqlRequestClient, { search: searchKey });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{`${error}`}</div>;
  if (data?.Page?.media?.length === 0) return <div>NOT FOUND</div>;

  const arr: any = data?.Page?.media?.map((media, i) => {
    // DANGR
    return `${media?.id}`;
  });

  return (
    //<SortableContext id={"A"} items={arr}>
    <>
      <div className=" h-[100%] w-[100%] overflow-y-scroll pt-2">
        {data?.Page?.media?.map((media, i) => {
          return (
            <SelectorCard
              key={i}
              id={media?.id}
              titleEng={media?.title?.english}
              titleRom={media?.title?.romaji}
              isAdult={media?.isAdult}
              img={media?.coverImage?.medium}
              format={media?.format}
            />
          );
        })}
        <Overlay />
      </div>
    </>
    // </SortableContext>
  );
};

type SelectorProps = {
  name: string;
};
const Selector = ({ name }: SelectorProps) => {
  return (
    <div className="row-span-2 grid h-[100vh] w-[100%] grid-flow-row grid-cols-1 grid-rows-[12%] items-start justify-center bg-stone-300">
      <SearchBar />
      <ListAnime />
    </div>
  );
};

export { Selector, SearchBar, ListAnime, SelectorCard };
export type { SelectorProps, SelectorCardProps, overlayprops };
