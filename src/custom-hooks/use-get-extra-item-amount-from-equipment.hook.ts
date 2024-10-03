import React from "react";
import getRandonNumber from "../utils/get-random-number.util";
import usePlayerEquipmentStore from "../store/hooks/use-player-equipment-store.hook";
import BagItem from "../items/models/bag-item.type";

const useGetExtraItemAmountFromEquipment = () => {
  const { playerBodyItem, playerFeetItem, playerHandItem, playerHandLeftItem, playerLegsItem, playerHeadItem } = usePlayerEquipmentStore();
  const itemList = React.useMemo(
    () => [playerBodyItem, playerFeetItem, playerHandItem, playerHandLeftItem, playerLegsItem, playerHeadItem],
    [playerBodyItem, playerFeetItem, playerHandItem, playerHandLeftItem, playerLegsItem, playerHeadItem]
  );

  const getExtraItemAmount = React.useCallback((item: BagItem) => {
    const { bonuses } = item;
    const { itemAmount, itemChance } = bonuses;
    const randomLuckNumber = getRandonNumber();
    if (randomLuckNumber <= itemChance) {
      return {
        itemAmount,
        text: `(+${itemAmount} tool bonus)`,
      };
    }
    return {
      itemAmount: 0,
      text: "",
    };
  }, []);

  const calculateExtraItemAmount = React.useCallback(() => {
    let extraItemAmountFromTool = 0;
    let extraItemsFromToolMessage = "";
    itemList.forEach((item) => {
      if (item) {
        const { itemAmount, text } = getExtraItemAmount(item);
        extraItemAmountFromTool += itemAmount;
        extraItemsFromToolMessage += text;
      }
    });
    return {
      extraItemAmountFromTool,
      extraItemsFromToolMessage,
    };
  }, [getExtraItemAmount, itemList]);

  return {
    calculateExtraItemAmount,
  };
};

export default useGetExtraItemAmountFromEquipment;
