import { boardItems } from "../../state";

export const compare = (a: boardItems[], b: boardItems[]) => {
  for (let i = 0; i < b.length; i++) {
    if (b[i]!.id === a[i]?.id) {
      return false;
    }
  }
  return true;
};
