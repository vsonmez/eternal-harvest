import React from "react";
import ButtonComponent from "../ui/button.component";
import usePlayerEquipmentStore from "../store/hooks/use-player-equipment-store.hook";
import usePlayerBagStore from "../store/hooks/use-player-bag-store.hook";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import BagItem from "../items/models/bag-item.type";
import getItemDef from "../utils/get-item-def.util";
import useWoodcutterStore from "../store/hooks/skills/use-woodcutter-store.hook";
import checkSkillLevelForItemLevel from "../utils/check-skill-level-for-item-level.util";

type Props = {
  item: BagItem;
};

const EquipButton: React.FC<Props> = ({ item }) => {
  const [requiredSkillName, setRequiredSkillName] = React.useState<string | undefined>();
  const { woodcutterLevel } = useWoodcutterStore();
  const itemDef = React.useMemo(() => getItemDef(item.defName), [item]);
  const {
    setPlayerHandItem,
    playerHandItem,
    playerLegsItem,
    playerFeetItem,
    playerBodyItem,
    playerHeadItem,
    playerHandLeftItem,
    setPlayerHandLeftItem,
    setPlayerBodyItem,
    setPlayerHeadItem,
    setPlayerFeetItem,
    setPlayerLegsItem,
  } = usePlayerEquipmentStore();
  const { setItemEquipped, setItemUnequipped } = usePlayerBagStore();
  const { addToastrMessage } = useToastrStore();

  const canUse = React.useCallback(() => {
    switch (requiredSkillName) {
      case "Woodcutting":
        return checkSkillLevelForItemLevel(itemDef.requiredLevel, woodcutterLevel);
      default:
        return true;
    }
  }, [itemDef, requiredSkillName, woodcutterLevel]);

  const handleEquip = React.useCallback(
    (itemEquipSlot: ItemEqipSlot) => {
      if (canUse()) {
        switch (itemEquipSlot) {
          case "body":
            if (playerBodyItem) {
              setItemUnequipped(playerBodyItem);
            }
            setPlayerBodyItem(item);
            break;
          case "head":
            if (playerHeadItem) {
              setItemUnequipped(playerHeadItem);
            }
            setPlayerHeadItem(item);
            break;
          case "feet":
            if (playerFeetItem) {
              setItemUnequipped(playerFeetItem);
            }
            setPlayerFeetItem(item);
            break;
          case "hand":
            if (playerHandItem) {
              setItemUnequipped(playerHandItem);
            }
            setPlayerHandItem(item);
            break;
          case "handLeft":
            if (playerHandLeftItem) {
              setItemUnequipped(playerHandLeftItem);
            }
            setPlayerHandLeftItem(item);
            break;
          case "legs":
            if (playerLegsItem) {
              setItemUnequipped(playerLegsItem);
            }
            setPlayerLegsItem(item);
            break;
          default:
            break;
        }
        setItemEquipped(item);
        addToastrMessage({ text: `Equipped ${itemDef.name}`, type: "info" });
      } else {
        addToastrMessage({ text: `You need ${itemDef.requiredLevel} ${requiredSkillName} to equip ${itemDef.name}`, type: "warning" });
      }
    },
    [
      playerBodyItem,
      playerHeadItem,
      playerFeetItem,
      playerHandItem,
      playerLegsItem,
      setItemEquipped,
      setItemUnequipped,
      addToastrMessage,
      item,
      itemDef,
      setPlayerBodyItem,
      setPlayerFeetItem,
      setPlayerHeadItem,
      setPlayerHandItem,
      setPlayerLegsItem,
      setPlayerHandLeftItem,
      playerHandLeftItem,
      requiredSkillName,
      canUse,
    ]
  );

  const handleUnequip = React.useCallback(() => {
    setPlayerHandItem(null);
    setItemUnequipped(item);

    addToastrMessage({ text: `Unequipped ${itemDef.name}`, type: "info" });
  }, [item, setItemUnequipped, setPlayerHandItem, addToastrMessage, itemDef]);

  React.useEffect(() => {
    setRequiredSkillName(itemDef.requiredSkill);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemDef]);

  return <ButtonComponent onClick={item.isEquipped ? () => handleUnequip() : () => handleEquip(item.equipSlot)}>{item.isEquipped ? <span>Unequip</span> : <span>Equip</span>}</ButtonComponent>;
};

export default React.memo(EquipButton);
