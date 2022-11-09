import { useDraggable } from "@dnd-kit/core";
import useCharacterDndStore from "../characterstate";
import { CSS } from "@dnd-kit/utilities";
import {
  SearchCharacterQuery,
  useSearchCharacterQuery,
} from "../../../generated/graphql";
import graphqlRequestClient from "../../../clints/GQLRequestClient";
import { ChangeEvent } from "react";
import { CharacterSearchCache } from "../../../generated/searchCharacterCache";
import { LoadingList } from "../../loadingList";
import { NotFound } from "../../notFound";

import { checkSelected } from "../../utils/checkSelected";

import { CharacterSearchCard } from "./CharacterSearchCard";
import { UnderOverlay } from "../../utils/UnderOverlay";
import { SearchBarUi } from "../../utils/searchBarUi";
import { compare } from "../../utils/compareBoarditems";
import { createFilterCheckList } from "../../utils/createFilterCheckList";
import { overlayprops } from "../../utils/typs";

type SelectorCardProps = {
  id: number | undefined;
  titleEng: string | null | undefined;
  titleRom: string | null | undefined;
  img: string | null | undefined;
  name: string;
  format: string | null | undefined;
};
const CharacterSelectorCard = ({
  id,
  titleEng,
  img,
  name,
  titleRom,
  format,
}: SelectorCardProps) => {
  const activeId = useCharacterDndStore((state) => state.overlayState);

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
        <CharacterSearchCard
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
          name={name}
        />
      )}
    </>
  );
};

const CharacterSearchBar = () => {
  const setSearchKey = useCharacterDndStore((state) => state.setSearchkey);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = null;
    if (e.target.value !== "") {
      value = e.target.value;
    }
    setSearchKey(value);
  };
  return (
    <SearchBarUi
      placeholder="Search character"
      changeHandler={changeHandler}
      debouncetime={600}
    />
  );
};

const ListCharacter = () => {
  const items = useCharacterDndStore((state) => state.boardItems, compare);
  const searchKey = useCharacterDndStore((state) => state.searchKey);

  /* prettier-ignore */
  const { data, isLoading, error } = useSearchCharacterQuery<SearchCharacterQuery,Error>( graphqlRequestClient,
    {search: searchKey },
    {
      staleTime: 1000 * 60 * 15,
      // gettig a pre genrated respons for insial page load ,
      initialData: () => {
        if (searchKey === null) return CharacterSearchCache.data;
        return undefined;
      },
    }
  ); //15min
  /* prettier-ignore */
  if (isLoading)return (<div><LoadingList /></div>);
  /* prettier-ignore */
  if (error)return (<div className=" mr-auto ml-auto mt-8 flex h-96 w-[90%] flex-col items-center justify-center rounded-xl bg-[#031631] text-2xl text-sky-500">{`${error}`}</div>);
  /* prettier-ignore */ //for no related match found
  if (data?.Page?.characters?.length === 0) return (<div><NotFound searchkey={searchKey} /></div>);

  /*filtering so after transfering
   card to board ,card should be removed from 
   list and prevented from showing again*/

  /**this func filters against a object of keys storing */
  const filteredMidia = (
    data: SearchCharacterQuery,
    filterlist: {
      [key: string]: string;
    }
  ) => {
    const media: SelectorCardProps[] = [];
    const temp = data?.Page?.characters;
    console.log("ggff");
    for (let i = 0; i < temp!.length; i++) {
      const card = temp![i];
      console.log("check", filterlist);
      if (filterlist[card!.id] !== undefined) continue;
      const name: string = (() => {
        const tempName = "not fond";
        if (card?.name?.full === undefined) return tempName;
        if (card?.name?.full === null) return tempName;
        return card.name.full;
      })();
      const tempcard: SelectorCardProps = {
        id: card?.id,
        titleEng: card?.media?.nodes?.at(0)?.title?.english,
        titleRom: card?.media?.nodes?.at(0)?.title?.romaji,
        name: name,
        img: card?.image?.large,
        format: "CHARACTER",
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
            <CharacterSelectorCard
              key={i}
              id={media.id}
              titleEng={media.titleEng}
              titleRom={media.titleRom}
              img={media.img}
              format={media.format}
              name={media.name}
            />
          );
        })}
      </div>
    </>
  );
};

export { CharacterSearchBar, ListCharacter };
