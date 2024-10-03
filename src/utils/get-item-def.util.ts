import itemDefList from "../items/item-def.list";
import Item from "../items/models/item.type";

const getItemDef = (defName: string): Item => {
  const item = Object.values(itemDefList).find((item) => item.defName === defName);
  return { ...item! };
};
export default getItemDef;
