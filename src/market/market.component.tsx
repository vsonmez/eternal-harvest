import React from "react";
import getBuyableItems from "../utils/get-buyable-items.util";
import DialogComponent from "../ui/dialog.component";
import MarketItemComponent from "./market-item.component";
import useFilterItemsbyItemType from "../custom-hooks/use-filter-items.hook";
import ItemfilterButtons from "../ui/item/item-filter-buttons";
import Item from "../items/models/item.type";

type Props = {
  onClose: () => void;
};

const Market: React.FC<Props> = ({ onClose }) => {
  const buyableItems = React.useMemo(() => getBuyableItems(), []);
  const { filterItems, filteredItems } = useFilterItemsbyItemType(buyableItems);
  return (
    <DialogComponent addOn={<ItemfilterButtons filterItems={filterItems} />} onClose={onClose} title="Market" className="market" showGold showHunger>
      <ul className="flex flex-col gap-3 w-80">
        {((filteredItems as Item[]) || buyableItems).map((item) => (
          <li key={item.defName}>
            <MarketItemComponent item={item} />
          </li>
        ))}
      </ul>
    </DialogComponent>
  );
};

export default React.memo(Market);
