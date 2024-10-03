import { XMarkIcon } from "@heroicons/react/24/outline";
import usePlayerEquipmentStore from "../store/hooks/use-player-equipment-store.hook";
import ButtonComponent from "../ui/button.component";
import ItemNameImageComponent from "../ui/item/item-name-image.component";
import usePlayerBagStore from "../store/hooks/use-player-bag-store.hook";
import React from "react";

const FeetEquipment = () => {
  const { playerFeetItem, setPlayerFeetItem } = usePlayerEquipmentStore();
  const { setItemUnequipped } = usePlayerBagStore();

  const unEquip = () => {
    playerFeetItem && setItemUnequipped(playerFeetItem);
    setPlayerFeetItem(null);
  };

  return (
    <>
      {playerFeetItem && (
        <div className="flex flex-col gap-1 border">
          <div className="flex flex-col justify-between items-center gap-2 relative">
            <ItemNameImageComponent item={playerFeetItem} isCol />
            <ButtonComponent className="border-rose-700 bg-rose-700 text-white absolute top-0 right-0" onClick={unEquip}>
              <XMarkIcon className="w-3 h-3" />
            </ButtonComponent>
          </div>
        </div>
      )}
      {!playerFeetItem && (
        <div className="flex flex-col gap-1 border p-2 w-[100px]">
          <div className="flex justify-between items-center gap-2">
            <strong>No equipment</strong>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(FeetEquipment);
