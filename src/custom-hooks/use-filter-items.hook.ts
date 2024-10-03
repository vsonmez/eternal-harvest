import React from "react";
import Item from "../items/models/item.type";
import BagItem from "../items/models/bag-item.type";
import usePlayerBagStore from "../store/hooks/use-player-bag-store.hook";

const useFilterItemsbyItemType = (itemList: Item[] | BagItem[], isInBag = false) => {
  const [filterType, setFilterType] = React.useState<ItemType | undefined>(undefined);
  const [filteredItems, setFilteredItems] = React.useState<BagItem[] | Item[] | undefined>(itemList);
  const { playerBag } = usePlayerBagStore();

  const filterItems = React.useCallback(
    (filterType: ItemType | undefined) => {
      setFilterType(filterType);
      switch (filterType) {
        case "clothes":
          const clothesItems = itemList.filter((item) => item.itemType === "clothes");
          setFilteredItems(clothesItems);
          break;
        case "tool":
          const toolItems = itemList.filter((item) => item.itemType === "tool");
          setFilteredItems(toolItems);
          break;
        case "food":
          const foodItems = itemList.filter((item) => item.itemType === "food");
          setFilteredItems(foodItems);
          break;
        case "rawMaterial":
          const rawMaterialItems = itemList.filter((item) => item.itemType === "rawMaterial");
          setFilteredItems(rawMaterialItems);
          break;
        default:
          setFilteredItems(undefined);
          break;
      }
    },
    [itemList, setFilteredItems]
  );

  React.useEffect(() => {
    if (isInBag) {
      filterItems(filterType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType, playerBag, isInBag]);

  return { filteredItems, filterItems };
};

export default useFilterItemsbyItemType;
