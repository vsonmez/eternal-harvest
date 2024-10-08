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
import Translation from "../../language/transltion";

const WoodCollector: React.FC = () => {
  const [isAutoWoodcutting, setIsAutoWoodcutting] = React.useState<boolean>(false);
  const { addItemToPlayerBag, addMessage, checkHungerValueForSkillSuccess, count, isActive, play, playerBag, resetMessageList, setIsBusy, startCountdown, calculateExtraItemAmount, language } =
    useSkill(sound, woodcutterConstant.counterLimit);

  const canUseWoodcutting = useCheckWoodcutterAxe();
  const collectWood = useCollectItemForSkill(canUseWoodcutting, isActive, startCountdown, play);
  const { increaseWoodCuttingLevel, increaseWoodCuttingXP, woodcutterLevel, woodcuttingXP, woodcuttingXPToNextLevel, hasAutoWoodcutting } = useWoodcutterStore();

  React.useEffect(() => {
    if (count === 0 && isActive) {
      setIsBusy(false);
      if (checkHungerValueForSkillSuccess()) {
        const { extraItemAmountFromTool } = calculateExtraItemAmount();
        const luckPoint = Math.min(woodcutterLevel, woodcutterConstant.bonusLimit);
        const { extraItem } = getExtraItemByLevel(luckPoint);
        const itemAmount = 1 + extraItem + extraItemAmountFromTool;

        increaseWoodCuttingXP(itemAmount);
        addItemToPlayerBag({
          ...itemDefList.wood,
          amount: itemAmount,
        });

        addMessage({
          text: Translation.translateFunctions[language].youHarvested(Translation.translate[language].wood, itemAmount),
          type: "success",
        });
      } else {
        setIsAutoWoodcutting(false);
      }
    }

    if (isAutoWoodcutting && !isActive) {
      collectWood();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isActive, isAutoWoodcutting]);

  React.useEffect(() => {
    if (woodcutterLevel < woodcutterConstant.levelLimit) {
      if (woodcuttingXP >= woodcuttingXPToNextLevel) {
        increaseWoodCuttingLevel();
        addMessage({
          text: `${Translation.translate[language].levelIncreased}: ${Translation.translate[language].woodcutting} ${woodcutterLevel + 1}`,
          type: "perfect",
        });
      }
    }
  }, [woodcutterLevel, woodcuttingXP, woodcuttingXPToNextLevel, increaseWoodCuttingLevel, addMessage, language]);

  React.useEffect(() => {
    return resetMessageList;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border border-gray-500 p-2 woodcutter flex flex-col gap-2">
      <div className="bg-black/70 p-2 flex items-center justify-between gap-1">
        <h3>
          {Translation.translate[language].level}: {woodcutterLevel}/{woodcutterConstant.levelLimit}
        </h3>
        <h3>
          XP: {woodcuttingXP}/{woodcuttingXPToNextLevel}
        </h3>
      </div>
      <div className="bg-black/70 p-2 flex flex-col gap-1">
        <h2>{Translation.translate[language].woodcutting}</h2>
        <h3>
          {Translation.translate[language].amount}: {playerBag["wood"]?.amount || 0}
        </h3>
        {hasAutoWoodcutting && (
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={isAutoWoodcutting} onChange={() => setIsAutoWoodcutting(!isAutoWoodcutting)} />
            <span>{Translation.translate[language].autoWoodcutting}</span>
          </label>
        )}
        <ButtonComponent disabled={!canUseWoodcutting} onClick={collectWood}>
          {isActive ? `${Translation.translate[language].harvesting} ${count}` : Translation.translate[language].harvest}
        </ButtonComponent>
      </div>
      <div className="bg-black/70 p-2">{Translation.translateFunctions[language].extraItemChance(Translation.translate[language].wood, woodcutterLevel)}</div>
    </div>
  );
};
export default React.memo(WoodCollector);
