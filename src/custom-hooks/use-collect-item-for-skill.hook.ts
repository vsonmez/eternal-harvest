import React from "react";
import useCheckHungerValueForSkill from "./use-check-hunger-value-for-skill.hook";
import useMessageStore from "../store/hooks/use-message-store.hook";
import usePlayerHungerStore from "../store/hooks/use-player-hunger-store.hook";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import checkItemTakingDamage from "../utils/check-item-taking-damage.util";
import usePlayerBagStore from "../store/hooks/use-player-bag-store.hook";
import usePlayerEquipmentStore from "../store/hooks/use-player-equipment-store.hook";
import BagItem from "../items/models/bag-item.type";
import Translation from "../language/transltion";

const useCollectItemForSkill = (canUseSkill: boolean, isActive: boolean, startCountdown: () => void, play: () => void) => {
  const { checkHungerValue } = useCheckHungerValueForSkill();
  const { addMessage } = useMessageStore();
  const { decreaseHungerValue } = usePlayerHungerStore();
  const {
    setIsBusy,
    getGlobal: { language },
  } = useGlobalStore();
  const { setPlayerHandItem, playerHandItem } = usePlayerEquipmentStore();
  const { removeItemFromPlayerBag } = usePlayerBagStore();

  const collectItem = React.useCallback(() => {
    if (canUseSkill && checkHungerValue()) {
      const isBroken = checkItemTakingDamage();
      if (isBroken) {
        setPlayerHandItem(null);
        removeItemFromPlayerBag({ ...playerHandItem } as BagItem);
        addMessage({
          text: Translation.translateFunctions[language].itemBroken(playerHandItem!.name),
          type: "warning",
        });
        setIsBusy(false);
        return;
      }
      if (!isActive) {
        addMessage({
          text: Translation.translate[language].harvesting,
          type: "info",
        });
        decreaseHungerValue(1);
        setIsBusy(true);
        startCountdown();
        play();
      }
    }
  }, [isActive, startCountdown, setIsBusy, play, decreaseHungerValue, canUseSkill, addMessage, checkHungerValue, setPlayerHandItem, playerHandItem, removeItemFromPlayerBag]);

  return collectItem;
};
export default useCollectItemForSkill;
