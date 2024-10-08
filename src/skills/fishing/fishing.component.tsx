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
import Translation from "../../language/transltion";

const Fishing = () => {
  const [isAutoFishing, setIsAutoFishing] = React.useState(false);
  const { addItemToPlayerBag, addMessage, checkHungerValueForSkillSuccess, count, isActive, play, playerBag, resetMessageList, setIsBusy, startCountdown, calculateExtraItemAmount, language } =
    useSkill(fishingSound, fishingConstant.counterLimit);

  const canUseFishing = useCheckFishingRod();
  const collectFish = useCollectItemForSkill(canUseFishing, isActive, startCountdown, play);
  const { fishingLevel, fishingXP, fishingXPToNextLevel, increaseFishingXP, increaseFishingLevel, hasAutoFishing } = useFishingStore();

  React.useEffect(() => {
    if (count === 0 && isActive) {
      setIsBusy(false);
      if (checkHungerValueForSkillSuccess()) {
        const { extraItemAmountFromTool } = calculateExtraItemAmount();
        const luckPoint = Math.min(fishingLevel, fishingConstant.bonusLimit);
        const { extraItem } = getExtraItemByLevel(luckPoint);
        const itemAmount = 1 + extraItem + extraItemAmountFromTool;

        increaseFishingXP(itemAmount);
        addItemToPlayerBag({
          ...itemDefList.rawFish,
          amount: itemAmount,
        });

        addMessage({
          text: Translation.translateFunctions[language].youHarvested(itemDefList.rawFish.name, itemAmount),
          type: "success",
        });
      } else {
        setIsAutoFishing(false);
      }
    }
    if (isAutoFishing && !isActive) {
      collectFish();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isActive, isAutoFishing]);

  React.useEffect(() => {
    if (fishingLevel < fishingConstant.levelLimit) {
      if (fishingXP >= fishingXPToNextLevel) {
        increaseFishingLevel();
        addMessage({
          text: `${Translation.translate[language].levelIncreased}: ${Translation.translate[language].fishing} ${fishingLevel + 1}`,
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
          {Translation.translate[language].level}: {fishingLevel}/{fishingConstant.levelLimit}
        </h3>
        <h3>
          XP: {fishingXP}/{fishingXPToNextLevel}
        </h3>
      </div>
      <div className="bg-black/70 p-2 flex flex-col gap-1">
        <h2>{Translation.translate[language].fishing}</h2>
        <h3>
          {Translation.translate[language].amount}: {playerBag["rawFish"]?.amount || 0}
        </h3>
        {hasAutoFishing && (
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={isAutoFishing} onChange={() => setIsAutoFishing(!isAutoFishing)} />
            <span>{Translation.translate[language].autoFishing}</span>
          </label>
        )}
        <ButtonComponent disabled={!canUseFishing} onClick={collectFish}>
          {isActive ? `${Translation.translate[language].harvesting} ${count}` : Translation.translate[language].harvest}
        </ButtonComponent>
      </div>
      <div className="bg-black/70 p-2">{Translation.translateFunctions[language].extraItemChance(Translation.translate[language].rawFish, fishingLevel)}</div>
    </div>
  );
};
export default React.memo(Fishing);
