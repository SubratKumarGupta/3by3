import { useDroppable, useDndMonitor } from "@dnd-kit/core";
import {
  arrayMove,
  useSortable,
  SortableContext,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import useStore from "../state";

type BoardCardProps = {
  id: string;
  name: string;
};

const DropArea = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      className=" h-[100%] w-[100%] bg-slate-400"
      ref={setNodeRef}
      style={style}
    ></div>
  );
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
      <DropArea />
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
  const setActiveId = useStore((state) => state.setOverlayState);

  useDndMonitor({
    onDragStart(event: any) {
      console.log(event);
      if (event.active.data.current?.sortable?.containerId === "B") {
        setActiveId(event.active.id);
      } else {
        setActiveId(JSON.parse(event.active.id));
      }
    },
    onDragEnd(event: any) {
      console.log(event);
      //if (event.active.data.current === undefined) {
      setActiveId(null);
      //} else {
      //dangrous
      const { active, over } = event;
      console.log("bddd");
      if (over === null) return;
      if (active.id !== over.id) {
        console.log("aaaa");
        const newItems = (items: string[]) => {
          const oldIndex = items.indexOf(active.id);
          const newIndex = items.indexOf(over.id);

          return arrayMove(items, oldIndex, newIndex);
        };
        setItems(newItems(items));
      }
      //}
    },
  });

  return (
    <SortableContext id={"B"} strategy={rectSwappingStrategy} items={items}>
      <div className="m-[7px] grid aspect-square w-[50%] grid-flow-dense grid-cols-3 grid-rows-3 items-center justify-items-center bg-gray-800 text-center">
        {items.map((code) => (
          <BoardCard key={code} id={code} name={code} /> // have to render it with map or it will brake
        ))}
      </div>
    </SortableContext>
  );
};

export { T3TBoard, BoardCard };
export type { T3TBoardProps, BoardCardProps };
