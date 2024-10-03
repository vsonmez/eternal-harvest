import React from "react";
import BagItem from "../../items/models/bag-item.type";
import getItemDef from "../../utils/get-item-def.util";
import ItemAmountComponent from "./item-amount.component";

type Props = {
  item: BagItem;
  isCol?: boolean;
};

const ItemNameImage: React.FC<Props> = ({ item, isCol }) => {
  const itemDef = React.useMemo(() => getItemDef(item.defName), [item]);
  const rairty = React.useMemo(() => itemDef.rarity, [itemDef]);
  const rarityClassName = React.useMemo(() => {
    switch (rairty) {
      case "uncommon":
        return "text-green-500";
      case "rare":
        return "text-blue-500";
      case "epic":
        return "text-purple-500";
      case "legendary":
        return "text-yellow-500";
      default:
        return "";
    }
  }, [rairty]);

  return (
    <>
      {!isCol && (
        <div className={`flex justify-between items-center gap-2 ${isCol ? "flex-col" : ""}`}>
          <img src={`/images/${item.defName}.jpeg`} alt="" className="w-10 h-10 border border-gray-700" />
          <span className={rarityClassName}>
            {itemDef.name} <ItemAmountComponent item={item} />
          </span>
        </div>
      )}
      {isCol && (
        <div className="relative text-xs">
          <span className={`${rarityClassName} absolute bottom-0 left-0 p-1 text-center`}>{itemDef.name}</span>
          <img src={`/images/${item.defName}.jpeg`} alt="" className="w-full h-full" />
        </div>
      )}
    </>
  );
};

export default React.memo(ItemNameImage);
