import React from "react";
import { AnimeOverlay } from "./anime/AnimeOverlay";
import {
  AnimeSearchBar,
  ListAnime,
} from "./anime/searchAndSelect/searchAndSelect";
import { MangaOverlay } from "./manga/MangaOverlay";
import {
  MangaSearchBar,
  ListManga,
} from "./manga/searchAndSelect/searchAndSelect";
import { CharacterOverlay } from "./character/CharacterOverlay";
import {
  CharacterSearchBar,
  ListCharacter,
} from "./character/searchAndSelect/searchAndSelect";

const Manga = () => {
  return (
    <>
      <MangaSearchBar />
      <ListManga />
      <MangaOverlay />
    </>
  );
};

const Anime = () => {
  return (
    <>
      <AnimeSearchBar />
      <ListAnime />
      <AnimeOverlay />
    </>
  );
};
const Character = () => {
  return (
    <>
      <CharacterSearchBar />
      <ListCharacter />
      <CharacterOverlay />
    </>
  );
};
type props = {
  type: string;
};

export const Selector: React.FC<props> = ({ type }: props) => {
  let Content = Anime;
  if (type === "ANIME") Content = Anime;
  if (type === "MANGA") Content = Manga;
  if (type === "CHARACTER") Content = Character;
  return (
    <div className="row-span-2 grid h-[100vh] w-[100%] grid-flow-row grid-cols-1 grid-rows-[12%] items-start justify-center bg-[#000a18]">
      <Content />
    </div>
  );
};
