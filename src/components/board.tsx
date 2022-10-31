import { useDroppable, useDndMonitor } from "@dnd-kit/core";
import Image from "next/image";
import {
  arrayMove,
  useSortable,
  SortableContext,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { number } from "zod";
import useStore, { boardItems } from "../state";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

type BoardCardProps = {
  id: string;
  name: string;
  format: string;
  img: string;
};

const BoardCard = ({ name, id, img, format }: BoardCardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: `${id}` });
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
      className="z-50 flex aspect-square h-[100%] w-[100%] touch-none items-center justify-center text-sm"
    >
      {img ? (
        <div className=" relative h-[95%] w-[95%]">
          <Image
            quality={90}
            src={`${img}`}
            alt={`anime image of anime`}
            layout={"fill"}
            objectFit={"cover"}
          />
        </div>
      ) : null}
      {/* <div>{name}</div> */}
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
      if (event.active.data.current?.sortable?.containerId === "B") {
        setActiveId(event.active.id);
      } else {
        setActiveId(JSON.parse(event.active.id));
      }
    },
    onDragEnd(event: any) {
      setActiveId(null);
      const { active, over } = event;
      if (event.active.data.current?.sortable?.containerId === "B") {
        console.log("===B");
        console.log(over);
        if (active.id !== over.id) {
          const newItems = (items: boardItems[]) => {
            const oldIndex = items.findIndex(function (items) {
              return items.id === over.id;
            });
            const newIndex = items.findIndex(function (items) {
              return items.id === active.id;
            });
            console.log(oldIndex, over.id, newIndex, active.id, "kkkkkkkkkk");

            // const oldIndex = items.findIndex(function (items) {
            //   return items.id === over.id;
            // });
            // const newIndex = items.findIndex(function (items) {
            //   return items.id === active.id;
            // });
            const swap = (
              items: boardItems[],
              oldIndex: number,
              newIndex: number
            ) => {
              const output = [...items];
              const temp = output[oldIndex];
              output[oldIndex] = output[newIndex]!;
              output[newIndex] = temp!;
              console.log("prrrr", output === items, oldIndex, newIndex);
              return output;
              // console.log(output === items);
            };
            return swap(items, oldIndex, newIndex);
            //return arrayMove(items, oldIndex, newIndex);
          };
          // console.log(
          //   "prrrr",
          //   newItems(items) == items,
          //   items,
          //   newItems(items)
          // );
          setItems(newItems(items));
        }
      } else {
        console.log("!!!B");
        if (over === null) return;
        type moveAcativeType = {
          format: string;
          id: number;
          img: string;
          titleEng: string;
          titleRom: string;
        };
        const moveAcative: moveAcativeType = JSON.parse(active.id);
        if (moveAcative.id !== over.id) {
          console.log("change");

          const newItems = (items: boardItems[]) => {
            const overIndex = items.findIndex(function (items) {
              return;
            });
            const output: boardItems[] = [];
            console.log(overIndex, over.id);
            for (let i = 0; i < items.length; i++) {
              const item: any = items[i];
              if (item.id === over.id) {
                output.push({
                  id: `${moveAcative.id}`,
                  img: moveAcative.img,
                  name: `${
                    moveAcative.titleEng
                      ? moveAcative.titleEng
                      : moveAcative.titleRom
                  }`,
                  format: moveAcative.format,
                });
              } else {
                output.push(item);
              }
            }
            return output;
          };
          console.log("ruuuuuuuuuuuuuuuu", newItems(items), items);
          console.log("ruuuuuuuuuuuuuuuu", newItems(items) === items);
          setItems(newItems(items));
        }
      }

      console.log("bddd");

      //}
    },
  });

  return (
    <SortableContext id={"B"} strategy={rectSwappingStrategy} items={items}>
      <div className="grid aspect-square w-[50%] touch-manipulation grid-flow-dense grid-cols-3 grid-rows-3 items-center justify-items-center bg-[#000a18] text-center">
        {items.map((item, i) => (
          <BoardCard
            key={i}
            id={item.id}
            format={item.format!}
            img={item.img!}
            name={`${item.name}`}
          /> // have to render it with map or it will brake
        ))}
      </div>
    </SortableContext>
  );
};

export { T3TBoard, BoardCard };
export type { T3TBoardProps, BoardCardProps };
