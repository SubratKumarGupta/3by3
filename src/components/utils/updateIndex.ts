import { moveAcativeType } from "../anime/3x3/3x3";
import { boardItems } from "./typs";

export const updateIndex = (
  moveAcative: moveAcativeType,
  items: boardItems[],
  over: any
) => {
  const output: boardItems[] = [];
  for (let i = 0; i < items.length; i++) {
    const item: any = items[i];
    if (item.id === over.id) {
      output.push({
        id: `${moveAcative.id}`,
        img: moveAcative.img,
        name: `${
          moveAcative.titleEng ? moveAcative.titleEng : moveAcative.titleRom
        }`,
        format: moveAcative.format,
      });
    } else {
      output.push(item);
    }
  }
  return output;
};
