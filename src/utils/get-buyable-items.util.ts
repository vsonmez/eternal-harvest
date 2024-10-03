import itemDefList from "../items/item-def.list";

const getBuyableItems = () => {
  const buyableItems = Object.values(itemDefList).filter((item) => item.isBuyable);

  return buyableItems;
};

export default getBuyableItems;
