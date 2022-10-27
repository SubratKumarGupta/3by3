import {
  DndContext,
  useDroppable,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  useSortable,
  SortableContext,
  rectSwappingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import useStore from "../state";

type BoardCardProps = {
  id: string;
  name: string;
};
const BoardCard = ({ name, id }: BoardCardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className=" m-2 flex aspect-square w-[84%] touch-none items-center justify-center bg-orange-500 text-sm"
    >
      {name}
    </div>
  );
};

type T3TBoardProps = {
  name: string;
};
const T3TBoard = ({ name }: T3TBoardProps) => {
  const items = useStore((state) => state.boardItems);
  const setItems = useStore((state) => state.setBoardItems);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  function handleDragEnd(event: DragEndEvent | any) {
    console.log(event);
    //dangrous
    const { active, over } = event;
    console.log("bddd");
    if (active.id !== over.id) {
      const newItems = (items: string[]) => {
        console.log("aaaa");
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      };
      setItems(newItems(items));
    }
  }
  //const names:string=["jojo","tokyo re","kakushigoto","watamote","HxH","chainshaw man","stinse gate","mob physho","spy femily"]
  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
    >
      <SortableContext strategy={rectSwappingStrategy} items={items}>
        <div className="m-[7px] grid aspect-square w-[50%] grid-flow-dense grid-cols-3 grid-rows-3 items-center justify-items-center bg-gray-800 text-center">
          {items.map((code) => (
            <BoardCard key={code} id={code} name={code} /> // have to render it with map or it will brake
          ))}

          {/* <BoardCard id={"B2"} name={"tokyo re"} />
          <BoardCard id={"B3"} name={"HxH"} />

          <BoardCard id={"B4"} name={"stinse gate"} />
          <BoardCard id={"B5"} name={"mob physho"} />
          <BoardCard id={"B6"} name={"spy femily"} />

          <BoardCard id={"B7"} name={"chainshaw man"} />
          <BoardCard id={"B8"} name={"watamote"} />
          <BoardCard id={"B9"} name={"kakushigoto"} /> */}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export { T3TBoard, BoardCard };
export type { T3TBoardProps, BoardCardProps };
