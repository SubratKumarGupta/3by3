import { boardItems } from "./typs";

export const createFilterCheckList = (items: boardItems[]) => {
  const filteredlist: { [key: string]: string } = items.reduce(function (
    map: { [key: string]: string },
    obj
  ) {
    map[obj.id] = obj.name!;
    return map;
  },
  {});
  return filteredlist;
};
