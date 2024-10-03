import React from "react";
import useCountdown from "../../custom-hooks/use-countdown.hook";
import usePlayerBagStore from "../../store/hooks/use-player-bag-store.hook";
import useGlobalStore from "../../store/hooks/use-global-store.hook";
import sound from "../../sounds/chopping.mp3";
import useSound from "../../custom-hooks/use-sound.hook";
import ButtonComponent from "../../ui/button.component";
import usePlayerHungerStore from "../../store/hooks/use-player-hunger-store.hook";
import itemDefList from "../../items/item-def.list";
import useWoodcutterStore from "../../store/hooks/skills/use-woodcutter-store.hook";
import usePlayerEquipmentStore from "../../store/hooks/use-player-equipment-store.hook";
import useMessageStore from "../../store/hooks/use-message-store.hook";
import woodcutterConstant from "../../constants/woodcutter.constant";
import useCheckWoodcutterAxe from "./hooks/use-check-woodcutter-axe.hook";
import useCheckHungerValueForSkill from "../../custom-hooks/use-check-hunger-value-for-skill.hook";
import getItemDef from "../../utils/get-item-def.util";
import getExtraWoodByLevel from "./utils/get-extra-wood-by-level.util";
import useGetSkillCountdownTime from "../../custom-hooks/use-get-skill-countdown-time.hook";
import useGetExtraItemAmountFromEquipment from "../../custom-hooks/use-get-extra-item-amount-from-equipment.hook";

const WoodCollector: React.FC = () => {
  const canUseWoodcutting = useCheckWoodcutterAxe();
  const { playerHandItem } = usePlayerEquipmentStore();
  const itemDef = React.useMemo(() => playerHandItem && getItemDef(playerHandItem.defName), [playerHandItem]);
  const countdownTime = useGetSkillCountdownTime(itemDef, woodcutterConstant.counterLimit);
  const { calculateExtraItemAmount } = useGetExtraItemAmountFromEquipment();
  const { count, isActive, startCountdown } = useCountdown(countdownTime);
  const { setIsBusy } = useGlobalStore();
  const { play } = useSound({ sound, playbackRate: 2 });
  const { addMessage, resetMessageList } = useMessageStore();
  const { decreaseHungerValue } = usePlayerHungerStore();
  const { addItemToPlayerBag, playerBag } = usePlayerBagStore();
  const { increaseWoodCuttingXP, woodcutterLevel, woodcuttingXP, woodcuttingXPToNextLevel, increaseWoodCuttingLevel } = useWoodcutterStore();
  const { checkHungerValueForSkillSuccess, checkHungerValue } = useCheckHungerValueForSkill();

  const collectWood = React.useCallback(() => {
    if (canUseWoodcutting && checkHungerValue()) {
      if (!isActive) {
        addMessage({
          text: "Harvesting wood...",
          type: "info",
        });
        decreaseHungerValue(1);
        setIsBusy(true);
        startCountdown();
        play();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, startCountdown, setIsBusy, play, decreaseHungerValue, canUseWoodcutting, addMessage]);

  React.useEffect(() => {
    if (count === 0 && isActive) {
      setIsBusy(false);
      if (checkHungerValueForSkillSuccess()) {
        const { extraItemAmountFromTool, extraItemsFromToolMessage } = calculateExtraItemAmount();
        const { extraWood, extraWoodMessage } = getExtraWoodByLevel(woodcutterLevel);
        const woodAmount = 1 + extraWood + extraItemAmountFromTool;

        increaseWoodCuttingXP(woodAmount);
        addItemToPlayerBag({
          ...itemDefList.wood,
          amount: woodAmount,
        });

        addMessage({
          text: `You harvested ${woodAmount} wood/s. ${extraItemsFromToolMessage} ${extraWoodMessage}`,
          type: "success",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isActive, countdownTime]);

  React.useEffect(() => {
    if (woodcutterLevel < woodcutterConstant.levelLimit) {
      if (woodcuttingXP >= woodcuttingXPToNextLevel) {
        increaseWoodCuttingLevel();
        addMessage({
          text: `Woodcutter level increased to ${woodcutterLevel + 1}`,
          type: "perfect",
        });
      }
    }
  }, [woodcutterLevel, woodcuttingXP, woodcuttingXPToNextLevel, increaseWoodCuttingLevel, addMessage]);

  React.useEffect(() => {
    return resetMessageList;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border border-gray-500 p-2 woodcutter flex flex-col gap-2">
      <div className="bg-black/70 p-2 flex items-center justify-between gap-1">
        <h3>
          Level: {woodcutterLevel}/{woodcutterConstant.levelLimit}
        </h3>
        <h3>
          XP: {woodcuttingXP}/{woodcuttingXPToNextLevel}
        </h3>
      </div>
      <div className="bg-black/70 p-2 flex flex-col gap-1">
        <h2>Wood Harvesting</h2>
        <h3>Wood Amount: {playerBag["wood"]?.amount || 0}</h3>
        <ButtonComponent disabled={!canUseWoodcutting} onClick={collectWood}>
          {isActive ? `Harvesting ${count}` : "Harvest Wood"}
        </ButtonComponent>
      </div>
      <div className="bg-black/70 p-2">
        +1 wood {woodcutterLevel}% chance. Max {woodcutterConstant.bonusLimit}%
      </div>
    </div>
  );
};
export default React.memo(WoodCollector);
