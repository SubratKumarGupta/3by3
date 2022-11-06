import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { T3TBoard } from "../../components/anime/3x3/3x3";
import { Selector } from "../../components/anime/searchAndSelect/searchAndSelect";

export const AnimeDndElements: React.FC = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <>
      <DndContext sensors={sensors}>
        <div className="bg grid h-[100%] w-[100%] grid-cols-[70%,30%] grid-rows-[85%] items-center justify-items-center">
          <T3TBoard name="jojo" />
          <Selector name="ANIME" />
        </div>
      </DndContext>
    </>
  );
};
