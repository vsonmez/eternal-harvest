import { XMarkIcon } from "@heroicons/react/24/outline";
import usePlayerEquipmentStore from "../store/hooks/use-player-equipment-store.hook";
import ButtonComponent from "../ui/button.component";
import ItemNameImageComponent from "../ui/item/item-name-image.component";
import usePlayerBagStore from "../store/hooks/use-player-bag-store.hook";
import React from "react";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import Translation from "../language/transltion";

const BodyEquipment = () => {
  const {
    getGlobal: { language },
  } = useGlobalStore();
  const { playerBodyItem, setPlayerBodyItem } = usePlayerEquipmentStore();
  const { setItemUnequipped } = usePlayerBagStore();

  const unEquip = () => {
    playerBodyItem && setItemUnequipped(playerBodyItem);
    setPlayerBodyItem(null);
  };

  return (
    <>
      {playerBodyItem && (
        <div className="flex flex-col gap-1 border">
          <div className="flex flex-col justify-between items-center gap-2 relative">
            <ItemNameImageComponent item={playerBodyItem} isCol />
            <ButtonComponent className="border-rose-700 bg-rose-700 text-white absolute top-0 right-0" onClick={unEquip}>
              <XMarkIcon className="w-3 h-3" />
            </ButtonComponent>
          </div>
        </div>
      )}
      {!playerBodyItem && (
        <div className="flex flex-col gap-1 border p-2 w-[100px]">
          <div className="flex justify-between items-center gap-2">
            <strong>{Translation.translate[language].noEquipment}</strong>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(BodyEquipment);
