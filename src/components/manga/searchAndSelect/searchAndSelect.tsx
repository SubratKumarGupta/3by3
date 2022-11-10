import { useDraggable } from "@dnd-kit/core";
import useMangaDndStore from "../mangastate";
import { CSS } from "@dnd-kit/utilities";
import {
  SearchMangaQuery,
  useSearchMangaQuery,
} from "../../../generated/graphql";
import { graphqlAnilistRequestClient } from "../../../clints/GQLAnilistRequestClient";
import { ChangeEvent } from "react";
import { mangaSearchCache } from "../../../generated/searchMangaCache";
import { LoadingList } from "../../loadingList";
import { NotFound } from "../../notFound";
import { checkSelected } from "../../utils/checkSelected";
import {
  MangaSearchCard,
  MangaSearchCardProps,
  roleAndName,
} from "./MangaSearchCard";
import { UnderOverlay } from "../../utils/UnderOverlay";
import { SearchBarUi } from "../../utils/searchBarUi";
import { compare } from "../../utils/compareBoarditems";
import { createFilterCheckList } from "../../utils/createFilterCheckList";
import { overlayprops } from "../../utils/typs";

const MangaSelectorCard = ({
  id,
  titleEng,
  img,
  isAdult,
  titleRom,
  format,
  staff,
}: MangaSearchCardProps) => {
  const activeId = useMangaDndStore((state) => state.overlayState);

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
        <MangaSearchCard
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
          staff={staff}
        />
      )}
    </>
  );
};

const MangaSearchBar = () => {
  const setSearchKey = useMangaDndStore((state) => state.setSearchkey);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = null;
    if (e.target.value !== "") {
      value = e.target.value;
    }
    setSearchKey(value);
  };
  return (
    <SearchBarUi
      placeholder="Search manga"
      changeHandler={changeHandler}
      debouncetime={600}
    />
  );
};

const ListManga = () => {
  const items = useMangaDndStore((state) => state.boardItems, compare);
  const searchKey = useMangaDndStore((state) => state.searchKey);

  /* prettier-ignore */
  const { data, isLoading, error } = useSearchMangaQuery<SearchMangaQuery,Error>( graphqlAnilistRequestClient,
    {search: searchKey },
    {
      staleTime: 1000 * 60 * 15,
      // gettig a pre genrated respons for insial page load ,
      initialData: () => {
        if (searchKey === null) return mangaSearchCache.data;
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
    data: SearchMangaQuery,
    filterlist: {
      [key: string]: string;
    }
  ) => {
    const media: MangaSearchCardProps[] = [];
    const temp = data?.Page?.media;
    console.log("ggff");

    for (let i = 0; i < temp!.length; i++) {
      const card = temp![i];
      console.log("check", filterlist);

      const staff: roleAndName[] = (() => {
        const tempStaff: roleAndName[] = [];
        if (card?.staffPreview?.edges?.length === undefined) return tempStaff;
        for (let i = 0; i < card?.staffPreview?.edges?.length; i++) {
          const edge = card?.staffPreview?.edges[i];

          if (edge?.role === "Story & Art") {
            tempStaff.pop();
            tempStaff.push({
              role: edge.role,
              name: edge.node?.name?.full ?? "Not Found",
            });
            break;
          } else {
            tempStaff.push({
              role: edge?.role ?? "",
              name: edge?.node?.name?.full ?? "",
            });
          }
        }
        return tempStaff;
      })();
      if (filterlist[card!.id] !== undefined) continue;
      // {art,}
      const tempcard: MangaSearchCardProps = {
        id: card?.id,
        titleEng: card?.title?.english,
        titleRom: card?.title?.romaji,
        isAdult: card?.isAdult,
        img: card?.coverImage?.extraLarge,
        format: card?.format,
        staff: staff,
      };
      media.push(tempcard);
    }
    return media;
  };
  const media = filteredMidia(data, createFilterCheckList(items));
  return (
    <>
      <div className=" h-[100%] w-[100%] overflow-x-hidden pt-2 scrollbar-hide">
        {media.map((media: MangaSearchCardProps, i: number) => {
          return (
            <MangaSelectorCard
              key={i}
              id={media.id}
              titleEng={media.titleEng}
              titleRom={media.titleRom}
              isAdult={media.isAdult}
              img={media.img}
              format={media.format}
              staff={media.staff} // staff={[{role:"Story & Art",name:"subrat"}]}
            />
          );
        })}
      </div>
    </>
  );
};

export { MangaSearchBar, ListManga };
