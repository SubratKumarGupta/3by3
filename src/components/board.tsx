import { 
    DndContext,
    useDroppable,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,} from "@dnd-kit/core";
  import {
    arrayMove,
    useSortable,
    SortableContext,
    rectSwappingStrategy,
    sortableKeyboardCoordinates,} from '@dnd-kit/sortable';
  import {CSS} from '@dnd-kit/utilities';
  import { useState } from "react";

  type BoardCardProps ={
    id:string;
    name:string;
  };
  const BoardCard = ({
    name,
    id, 
  }: BoardCardProps) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
    } = useSortable({id});
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
      className=" aspect-square touch-none items-center justify-center w-[84%] m-2 flex text-sm bg-orange-500">{name}</div>
    );
  };
  
  type T3TBoardProps = {
    name: string;
  };
  const T3TBoard = ({
    name,
  }: T3TBoardProps) => {
    const [items, setItems] = useState(["B1","B2","B3", "B4","B5","B6", "B7","B8","B9" ]);
    console.table(items)
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    );
    function handleDragEnd(event: any) {  //dangrous
      const {active, over} = event;
      
      if (active.id !== over.id) {
        setItems((items) => {
          const oldIndex = items.indexOf(active.id);
          const newIndex = items.indexOf(over.id);
          
          return arrayMove(items, oldIndex, newIndex);
        });
      }
    }
    return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <SortableContext strategy={rectSwappingStrategy} items={items} >
        <div className="aspect-square grid grid-cols-3 grid-rows-3 grid-flow-dense text-center items-center justify-items-center w-[50%] m-[7px] bg-gray-800">
         <BoardCard id={'B1'} name={"jojo"}/>
         <BoardCard id={'B2'} name={"tokyo re"}/>
         <BoardCard id={'B3'} name={"HxH"}/>
     
         <BoardCard id={'B4'} name={"stinse gate"}/>
         <BoardCard id={'B5'} name={"mob physho"}/>
         <BoardCard id={'B6'} name={"spy femily"}/>
     
         <BoardCard id={'B7'} name={"chainshaw man"}/>
         <BoardCard id={'B8'} name={"watamote"}/>
         <BoardCard id={'B9'} name={"kakushigoto"}/>
        </div>
     </SortableContext>
    </DndContext>
    );
  };

  export default T3TBoard