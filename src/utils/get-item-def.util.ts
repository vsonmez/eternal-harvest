import itemDefList from "../items/item-def.list";
import Item, { ItemDefName } from "../items/models/item.type";

const getItemDef = (defName: ItemDefName): Item => {
  const item = Object.values(itemDefList).find((item) => item.defName === defName);
  return { ...item! };
};
export default getItemDef;
