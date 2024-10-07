import React from "react";
import usePlayerBagStore from "../store/hooks/use-player-bag-store.hook";
import InventoryItemComponent from "./inventory-item.component";
import DialogComponent from "../ui/dialog.component";
import useFilterItemsbyItemType from "../custom-hooks/use-filter-items.hook";
import ItemfilterButtons from "../ui/item/item-filter-buttons";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import Translation from "../language/transltion";

type Props = {
  onClose: () => void;
};

const Inventory: React.FC<Props> = ({ onClose }) => {
  const {
    getGlobal: { language },
  } = useGlobalStore();
  const { playerBag } = usePlayerBagStore();
  const { filterItems, filteredItems } = useFilterItemsbyItemType(Object.values(playerBag), true);

  return (
    <DialogComponent addOn={<ItemfilterButtons filterItems={filterItems} isInBag />} onClose={onClose} title={Translation.translate[language].inventory} className="inventory" showGold showHunger>
      <ul className="flex flex-col gap-3 w-80">
        {(filteredItems !== undefined ? filteredItems : Object.values(playerBag)).map((item) => {
          if (item.isEquipped && item.amount === 1) {
            return null;
          }
          return (
            <li key={item.defName}>
              <InventoryItemComponent item={{ ...item }} />
            </li>
          );
        })}
      </ul>
    </DialogComponent>
  );
};

export default React.memo(Inventory);
