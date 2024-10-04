import React from "react";
import useCheckHungerValueForSkill from "./use-check-hunger-value-for-skill.hook";
import useMessageStore from "../store/hooks/use-message-store.hook";
import usePlayerHungerStore from "../store/hooks/use-player-hunger-store.hook";
import useGlobalStore from "../store/hooks/use-global-store.hook";

const useCollectItemForSkill = (canUseSkill: boolean, isActive: boolean, startCountdown: () => void, play: () => void) => {
  const { checkHungerValue } = useCheckHungerValueForSkill();
  const { addMessage } = useMessageStore();
  const { decreaseHungerValue } = usePlayerHungerStore();
  const { setIsBusy } = useGlobalStore();
  const collectItem = React.useCallback(() => {
    if (canUseSkill && checkHungerValue()) {
      if (!isActive) {
        addMessage({
          text: "Harvesting...",
          type: "info",
        });
        decreaseHungerValue(1);
        setIsBusy(true);
        startCountdown();
        play();
      }
    }
  }, [isActive, startCountdown, setIsBusy, play, decreaseHungerValue, canUseSkill, addMessage, checkHungerValue]);

  return collectItem;
};
export default useCollectItemForSkill;
