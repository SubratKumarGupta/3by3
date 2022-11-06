import Image from "next/image";
import { DragOverlay, useDraggable } from "@dnd-kit/core";
import useAnimeDndStore from "../../../state";
import { CSS } from "@dnd-kit/utilities";
import {
  SearchAnimeQuery,
  useSearchAnimeQuery,
} from "../../../generated/graphql";
import graphqlRequestClient from "../../../clints/GQLRequestClient";
import { ChangeEvent } from "react";
import { SortableContext } from "@dnd-kit/sortable";
import { animeSearchCache } from "../../../generated/searchAnimeCache";
import { LoadingList } from "../../loadingList";
import { NotFound } from "../../notFound";

import { checkSelected } from "../../utils/checkSelected";

import { AnimeSearchCard } from "./AnimeSearchCard";
import { UnderOverlay } from "../../utils/UnderOverlay";
import { SearchBarUi } from "../../utils/searchBar";

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
  const activeId = useAnimeDndStore((state) => state.overlayState);

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
      {checkSelected(activeId, id) ? (
        <UnderOverlay
          type={"AMIME"}
          style={style}
          listeners={listeners}
          attributes={attributes}
          setNodeRef={setNodeRef}
          Id={Id}
        />
      ) : (
        <AnimeSearchCard
          type={"AMIME"}
          style={style}
          listeners={listeners}
          attributes={attributes}
          setNodeRef={setNodeRef}
          Id={Id}
          img={img}
          titleEng={titleEng}
          titleRom={titleRom}
          id={id}
          isAdult={isAdult}
          format={format}
        />
      )}
    </>
  );
};

const SearchBar = () => {
  const setSearchKey = useAnimeDndStore((state) => state.setSearchkey);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = null;
    if (e.target.value !== "") {
      value = e.target.value;
    }
    setSearchKey(value);
  };
  return <SearchBarUi changeHandler={changeHandler} debouncetime={600} />;
};

type overlayprops = {
  id: number | undefined;
  titleEng: string | null | undefined;
  titleRom: string | null | undefined;
  img: string | null | undefined;
  format: string | null | undefined;
};
const Overlay = () => {
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
  const items = useAnimeDndStore(
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
  const searchKey = useAnimeDndStore((state) => state.searchKey);
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
