import React from "react";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import ButtonComponent from "../ui/button.component";
import usePlayerBagStore from "../store/hooks/use-player-bag-store.hook";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import BagItem from "../items/models/bag-item.type";
import getItemDef from "../utils/get-item-def.util";

type Props = {
  item: BagItem;
};

const LockUnlockButton: React.FC<Props> = ({ item }) => {
  const itemDef = React.useMemo(() => getItemDef(item.defName), [item]);
  const { lockItem, unlockItem } = usePlayerBagStore();
  const { addToastrMessage } = useToastrStore();

  const handleLockUnlock = React.useCallback(() => {
    if (item.isLocked) {
      unlockItem(item);
    } else {
      lockItem(item);
    }
    addToastrMessage({
      type: "info",
      text: `Successfully ${item.isLocked ? "locked" : "unlocked"} ${itemDef.name}`,
    });
  }, [item, lockItem, unlockItem, addToastrMessage, itemDef]);
  return (
    <ButtonComponent onClick={handleLockUnlock}>
      {item.isLocked && <LockClosedIcon className="w-3 h-3" />}
      {!item.isLocked && <LockOpenIcon className="w-3 h-3" />}
    </ButtonComponent>
  );
};

export default React.memo(LockUnlockButton);
