import { boardItems } from "../../state";

export const swapItemsInAnIndex = (
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
};
