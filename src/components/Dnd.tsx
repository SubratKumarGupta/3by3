import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { AnimeT3TBoard } from "./anime/3x3/3x3";
import { CharacterT3TBoard } from "./character/3x3/3x3";
import { Intreaction } from "./dndintraction/interictions";
import { MangaT3TBoard } from "./manga/3x3/3x3";
import { Selector } from "./selector";

type props = {
  type: "CHARACTER" | "ANIME" | "MANGA";
};
export type { props };
export const DndElements: React.FC<props> = ({ type }: props) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  if (type === "CHARACTER")
    return (
      <>
        <DndContext sensors={sensors}>
          <div className="bg grid h-[100%] w-[100%] grid-cols-[70%,30%] grid-rows-[85%] items-center justify-items-center">
            <CharacterT3TBoard />
            <Selector type={type} />
            <Intreaction type={type} />
          </div>
        </DndContext>
      </>
    );
  if (type === "ANIME")
    return (
      <>
        <DndContext sensors={sensors}>
          <div className="bg grid h-[100%] w-[100%] grid-cols-[70%,30%] grid-rows-[85%] items-center justify-items-center">
            <AnimeT3TBoard />
            <Selector type={type} />
            <Intreaction type={type} />
          </div>
        </DndContext>
      </>
    );
  if (type === "MANGA")
    return (
      <>
        <DndContext sensors={sensors}>
          <div className="bg grid h-[100%] w-[100%] grid-cols-[70%,30%] grid-rows-[85%] items-center justify-items-center">
            <MangaT3TBoard />
            <Selector type={type} />
            <Intreaction type={type} />
          </div>
        </DndContext>
      </>
    );
  return <></>;
};
