import { useDndMonitor } from "@dnd-kit/core";
import Image from "next/legacy/image";
import {
  useSortable,
  SortableContext,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { swapItemsInAnIndex } from "../../utils/swapItemsInAnIndex";
import { updateIndex } from "../../utils/updateIndex";
import { boardItems } from "../../utils/typs";
import useMangaDndStore from "../mangastate";

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
  console.log(img);
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
            quality={100}
            src={`${img}`}
            alt={`anime image of anime`}
            layout={"fill"}
            objectFit={"cover"}
          />
        </div>
      ) : (
        <div className="relative flex h-[95%] w-[95%] items-center justify-center bg-sky-500 opacity-5 hover:opacity-10">
          <span className="text-lg opacity-100">Drag In</span>
        </div>
      )}
      {/* <div>{name}</div> */}
    </div>
  );
};

type moveAcativeType = {
  format: string;
  id: number;
  img: string;
  titleEng: string;
  titleRom: string;
};
const MangaT3TBoard = () => {
  const items = useMangaDndStore((state) => state.boardItems);
  const setItems = useMangaDndStore((state) => state.setBoardItems);
  const setActiveId = useMangaDndStore((state) => state.setOverlayState);
  useDndMonitor({
    onDragStart(event: any) {
      /**check if new item is from selector or just a rearrangment */
      if (event.active.data.current?.sortable?.containerId === "B") {
        /*for rearramgment*/
        setActiveId(event.active.id);
      } else {
        /*for new selector item */
        setActiveId(JSON.parse(event.active.id));
      }
    },
    onDragEnd(event) {
      setActiveId(null);

      const { active, over } = event;
      if (over === null) return; // handel miss fire
      /**check if new item is from selector or just a rearrangment */
      if (event.active.data.current?.sortable?.containerId === "B") {
        /*for rearramgment*/

        /**check if select grid item is over a new grid item */
        if (active.id !== over.id) {
          const newItems = (items: boardItems[]) => {
            /**get id for both grid Items */
            const oldIndex = items.findIndex(function (items) {
              return items.id === over.id;
            });
            const newIndex = items.findIndex(function (items) {
              return items.id === active.id;
            });

            /**swap both items position in the array */
            return swapItemsInAnIndex(items, oldIndex, newIndex);
          };
          /**update state new array*/
          setItems(newItems(items));
        }
      } else {
        /*for new selector item */

        //get new item info from id
        const moveAcative: moveAcativeType = JSON.parse(`${active.id}`);
        if (moveAcative.id !== over.id) {
          //update state
          setItems(updateIndex(moveAcative, items, over));
        }
      }
    },
  });

  return (
    <SortableContext id={"B"} strategy={rectSwappingStrategy} items={items}>
      <div className="grid aspect-square w-[30rem] touch-manipulation grid-flow-dense grid-cols-3 grid-rows-3 items-center justify-items-center bg-[#000a18] text-center">
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

export { MangaT3TBoard };
export type { BoardCardProps, moveAcativeType };
