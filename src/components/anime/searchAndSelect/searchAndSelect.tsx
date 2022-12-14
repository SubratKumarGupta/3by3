import { useDraggable } from "@dnd-kit/core";
import useAnimeDndStore from "../animestate";
import { CSS } from "@dnd-kit/utilities";
import {
  SearchAnimeQuery,
  useSearchAnimeQuery,
} from "../../../generated/AnilistGraphql";

import { ChangeEvent } from "react";
import { animeSearchCache } from "../../../generated/searchAnimeCache";
import { LoadingList } from "../../loadingList";
import { NotFound } from "../../notFound";

import { checkSelected } from "../../utils/checkSelected";

import { AnimeSearchCard } from "./AnimeSearchCard";
import { UnderOverlay } from "../../utils/UnderOverlay";
import { SearchBarUi } from "../../utils/searchBarUi";
import { compare } from "../../utils/compareBoarditems";
import { createFilterCheckList } from "../../utils/createFilterCheckList";
import { overlayprops } from "../../utils/typs";
import { graphqlAnilistRequestClient } from "../../../clints/GQLAnilistRequestClient";

type SelectorCardProps = {
  id: number | undefined;
  titleEng: string | null | undefined;
  titleRom: string | null | undefined;
  isAdult: boolean | null | undefined;
  img: string | null | undefined;
  format: string | null | undefined;
};
const AnimeSelectorCard = ({
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

const AnimeSearchBar = () => {
  const setSearchKey = useAnimeDndStore((state) => state.setSearchkey);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = null;
    if (e.target.value !== "") {
      value = e.target.value;
    }
    setSearchKey(value);
  };
  return (
    <SearchBarUi
      placeholder="Search anime"
      changeHandler={changeHandler}
      debouncetime={600}
    />
  );
};

const ListAnime = () => {
  const items = useAnimeDndStore((state) => state.boardItems, compare);
  const searchKey = useAnimeDndStore((state) => state.searchKey);

  /* prettier-ignore */
  const { data, isLoading, error } = useSearchAnimeQuery<SearchAnimeQuery,Error>( graphqlAnilistRequestClient,
    {search: searchKey },
    {
      staleTime: 1000 * 60 * 15,
      // gettig a pre genrated respons for insial page load ,
      initialData: () => {
        if (searchKey === null) return animeSearchCache.data;
        return undefined;
      },
    }
  ); //15min
  /* prettier-ignore */
  if (isLoading)return (<div><LoadingList /></div>);
  /* prettier-ignore */
  if (error)return (<div className=" mr-auto ml-auto mt-8 flex h-96 w-[90%] flex-col items-center justify-center rounded-xl bg-[#031631] text-2xl text-sky-500">{`${error}`}</div>);
  /* prettier-ignore */ //for no related match found
  if (data?.Page?.media?.length === 0) return (<div><NotFound searchkey={searchKey} /></div>);

  /*filtering so after transfering
   card to board ,card should be removed from 
   list and prevented from showing again*/

  /**this func filters against a object of keys storing */
  const filteredMidia = (
    data: SearchAnimeQuery,
    filterlist: {
      [key: string]: string;
    }
  ) => {
    const media: SelectorCardProps[] = [];
    const temp = data?.Page?.media;
    console.log("ggff");
    for (let i = 0; i < temp!.length; i++) {
      const card = temp![i];
      console.log("check", filterlist);
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
    return media;
  };
  const media = filteredMidia(data, createFilterCheckList(items));
  return (
    <>
      <div className=" h-[100%] w-[100%] overflow-x-hidden pt-2 scrollbar-hide">
        {media.map((media: SelectorCardProps, i: number) => {
          return (
            <AnimeSelectorCard
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
  );
};

export { AnimeSearchBar, ListAnime };
