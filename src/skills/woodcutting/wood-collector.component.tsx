import React from "react";
import sound from "../../sounds/chopping.mp3";
import ButtonComponent from "../../ui/button.component";
import itemDefList from "../../items/item-def.list";
import useWoodcutterStore from "../../store/hooks/skills/use-woodcutter-store.hook";
import woodcutterConstant from "../../constants/woodcutter.constant";
import useCheckWoodcutterAxe from "./hooks/use-check-woodcutter-axe.hook";
import getExtraItemByLevel from "../../utils/get-extra-item-by-level.util";
import useSkill from "../../custom-hooks/use-skill.hook";
import useCollectItemForSkill from "../../custom-hooks/use-collect-item-for-skill.hook";

const WoodCollector: React.FC = () => {
  const { addItemToPlayerBag, addMessage, checkHungerValueForSkillSuccess, count, isActive, play, playerBag, resetMessageList, setIsBusy, startCountdown, calculateExtraItemAmount } = useSkill(sound);

  const canUseWoodcutting = useCheckWoodcutterAxe();
  const collectWood = useCollectItemForSkill(canUseWoodcutting, isActive, startCountdown, play);
  const { increaseWoodCuttingLevel, increaseWoodCuttingXP, woodcutterLevel, woodcuttingXP, woodcuttingXPToNextLevel } = useWoodcutterStore();

  /*  const collectWood = React.useCallback(() => {
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
  }, [isActive, startCountdown, setIsBusy, play, decreaseHungerValue, canUseWoodcutting, addMessage]); */

  React.useEffect(() => {
    if (count === 0 && isActive) {
      setIsBusy(false);
      if (checkHungerValueForSkillSuccess()) {
        const { extraItemAmountFromTool, extraItemsFromToolMessage } = calculateExtraItemAmount();
        const luckPoint = Math.min(woodcutterLevel, woodcutterConstant.bonusLimit);
        const { extraItem, extraItemMessage } = getExtraItemByLevel(luckPoint);
        const itemAmount = 1 + extraItem + extraItemAmountFromTool;

        increaseWoodCuttingXP(itemAmount);
        addItemToPlayerBag({
          ...itemDefList.wood,
          amount: itemAmount,
        });

        addMessage({
          text: `You harvested ${itemAmount} wood/s. ${extraItemsFromToolMessage} ${extraItemMessage}`,
          type: "success",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isActive]);

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
