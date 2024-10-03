import clothesDefList from "./clothes-def.list";
import foodDefList from "./food-def.list";
import Item from "./models/item.type";
import rawMaterialDefList from "./raw-material-def.list";
import toolDefList from "./tool-def.list";

const itemDefList: {
  [key: string]: Item;
} = {
  ...foodDefList,
  ...clothesDefList,
  ...toolDefList,
  ...rawMaterialDefList,
};

export default itemDefList;
