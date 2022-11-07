import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { T3TBoard } from "./anime/3x3/3x3";
import { Selector } from "./selector";

type props = {
  type: string;
};
export const DndElements: React.FC<props> = ({ type }: props) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (type === "ANIME")
    return (
      <>
        <DndContext sensors={sensors}>
          <div className="bg grid h-[100%] w-[100%] grid-cols-[70%,30%] grid-rows-[85%] items-center justify-items-center">
            <T3TBoard name="jojo" />
            <Selector type={type} />
          </div>
        </DndContext>
      </>
    );
  if (type === "MANGA")
    return (
      <>
        <DndContext sensors={sensors}>
          <div className="bg grid h-[100%] w-[100%] grid-cols-[70%,30%] grid-rows-[85%] items-center justify-items-center">
            <T3TBoard name="jojo" />
            <Selector type={type} />
          </div>
        </DndContext>
      </>
    );
  return <></>;
};
