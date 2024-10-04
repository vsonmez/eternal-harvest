import React from "react";
import fishingSound from "../../sounds/fishing.mp3";
import useSkill from "../../custom-hooks/use-skill.hook";
import useCheckFishingRod from "./hooks/use-check-fishing-rod.hook";
import useFishingStore from "../../store/hooks/skills/use-fishing-store.hook";
import fishingConstant from "../../constants/fishing.constants";
import itemDefList from "../../items/item-def.list";
import getExtraItemByLevel from "../../utils/get-extra-item-by-level.util";
import ButtonComponent from "../../ui/button.component";
import useCollectItemForSkill from "../../custom-hooks/use-collect-item-for-skill.hook";

const Fishing = () => {
  const { addItemToPlayerBag, addMessage, checkHungerValueForSkillSuccess, count, isActive, play, playerBag, resetMessageList, setIsBusy, startCountdown, calculateExtraItemAmount } =
    useSkill(fishingSound);

  const canUseFishing = useCheckFishingRod();
  const collectFish = useCollectItemForSkill(canUseFishing, isActive, startCountdown, play);
  const { fishingLevel, fishingXP, fishingXPToNextLevel, increaseFishingXP, increaseFishingLevel } = useFishingStore();

  React.useEffect(() => {
    if (count === 0 && isActive) {
      setIsBusy(false);
      if (checkHungerValueForSkillSuccess()) {
        const { extraItemAmountFromTool, extraItemsFromToolMessage } = calculateExtraItemAmount();
        const luckPoint = Math.min(fishingLevel, fishingConstant.bonusLimit);
        const { extraItem, extraItemMessage } = getExtraItemByLevel(luckPoint);
        const itemAmount = 1 + extraItem + extraItemAmountFromTool;

        increaseFishingXP(itemAmount);
        addItemToPlayerBag({
          ...itemDefList.rawFish,
          amount: itemAmount,
        });

        addMessage({
          text: `You harvested ${itemAmount} raw fish/s. ${extraItemsFromToolMessage} ${extraItemMessage}`,
          type: "success",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isActive]);

  React.useEffect(() => {
    if (fishingLevel < fishingConstant.levelLimit) {
      if (fishingXP >= fishingXPToNextLevel) {
        increaseFishingLevel();
        addMessage({
          text: `Fishing level increased to ${fishingLevel + 1}`,
          type: "perfect",
        });
      }
    }
  }, [fishingLevel, fishingXP, fishingXPToNextLevel, increaseFishingLevel, addMessage]);

  React.useEffect(() => {
    return resetMessageList;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border border-gray-500 p-2 fishing flex flex-col gap-2">
      <div className="bg-black/70 p-2 flex items-center justify-between gap-1">
        <h3>
          Level: {fishingLevel}/{fishingConstant.levelLimit}
        </h3>
        <h3>
          XP: {fishingXP}/{fishingXPToNextLevel}
        </h3>
      </div>
      <div className="bg-black/70 p-2 flex flex-col gap-1">
        <h2>Fish Harvesting</h2>
        <h3>Fish Amount: {playerBag["rawFish"]?.amount || 0}</h3>
        <ButtonComponent disabled={!canUseFishing} onClick={collectFish}>
          {isActive ? `Harvesting ${count}` : "Harvest Fish"}
        </ButtonComponent>
      </div>
      <div className="bg-black/70 p-2">
        +1 raw fish {fishingLevel}% chance. Max {fishingConstant.bonusLimit}%
      </div>
    </div>
  );
};
export default React.memo(Fishing);
