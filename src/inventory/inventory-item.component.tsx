import React from "react";
import LockUnlockButton from "./lock-unlock-button.component";
import EatButtonComponent from "./eat-button.component";
import SellButtonComponent from "./sell-button.component";
import ItemNameImageComponent from "../ui/item/item-name-image.component";
import ItemDescriptionComponent from "../ui/item/item-description.component";
import ItemLockedWarningComponent from "../ui/item/item-locked-warning.component";
import EquipButtonComponent from "./equip-button.component";
import BagItem from "../items/models/bag-item.type";
import getItemDef from "../utils/get-item-def.util";

type Props = {
  item: BagItem;
};

const InventoryItem: React.FC<Props> = ({ item }) => {
  const itemDef = React.useMemo(() => getItemDef(item.defName), [item]);

  return (
    <div className="flex flex-col gap-1 border p-2">
      <div className="flex justify-between items-center gap-2">
        <ItemNameImageComponent item={item} />
        <LockUnlockButton item={item} />
      </div>
      <ItemDescriptionComponent item={item} />
      <ItemLockedWarningComponent item={item} />
      <SellButtonComponent item={item} />
      {itemDef.isEdible && <EatButtonComponent item={item} />}
      {itemDef.isEquipable && <EquipButtonComponent item={item} />}
    </div>
  );
};

export default React.memo(InventoryItem);
