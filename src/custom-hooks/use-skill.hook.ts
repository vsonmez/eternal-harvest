import React from "react";
import woodcutterConstant from "../constants/woodcutter.constant";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import useMessageStore from "../store/hooks/use-message-store.hook";
import usePlayerBagStore from "../store/hooks/use-player-bag-store.hook";
import usePlayerEquipmentStore from "../store/hooks/use-player-equipment-store.hook";
import getItemDef from "../utils/get-item-def.util";
import useCheckHungerValueForSkill from "./use-check-hunger-value-for-skill.hook";
import useCountdown from "./use-countdown.hook";
import useGetSkillCountdownTime from "./use-get-skill-countdown-time.hook";
import useSound from "./use-sound.hook";
import useGetExtraItemAmountFromEquipment from "./use-get-extra-item-amount-from-equipment.hook";

const useSkill = (sound: "*.mp3", counterLimit: number, playbackRate?: number, loop?: boolean) => {
  const { playerHandItem } = usePlayerEquipmentStore();
  const itemDef = React.useMemo(() => playerHandItem && getItemDef(playerHandItem.defName), [playerHandItem]);
  const countdownTime = useGetSkillCountdownTime(itemDef, woodcutterConstant.counterLimit);
  const { count, isActive, startCountdown } = useCountdown(countdownTime);
  const { setIsBusy } = useGlobalStore();
  const { play, pause } = useSound({ sound, playbackRate, loop });
  const { addMessage, resetMessageList } = useMessageStore();
  const { addItemToPlayerBag, playerBag } = usePlayerBagStore();
  const { checkHungerValueForSkillSuccess } = useCheckHungerValueForSkill();
  const { calculateExtraItemAmount } = useGetExtraItemAmountFromEquipment();

  return {
    count,
    isActive,
    startCountdown,
    setIsBusy,
    play,
    pause,
    addMessage,
    resetMessageList,
    addItemToPlayerBag,
    playerBag,
    checkHungerValueForSkillSuccess,
    calculateExtraItemAmount,
  };
};
export default useSkill;
