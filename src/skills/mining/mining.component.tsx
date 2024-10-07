import React from "react";
import useSkill from "../../custom-hooks/use-skill.hook";
import sound from "../../sounds/mining.mp3";
import miningConstant from "../../constants/mining.constants";
import useCollectItemForSkill from "../../custom-hooks/use-collect-item-for-skill.hook";
import useCheckPickAxe from "./hooks/use-check-pick-axe.hook";
import useMiningStore from "../../store/hooks/skills/use-mining-store.hook";
import getExtraItemByLevel from "../../utils/get-extra-item-by-level.util";
import itemDefList from "../../items/item-def.list";
import ButtonComponent from "../../ui/button.component";
import getOre from "../../utils/get-ore.util";
import getRandonNumber from "../../utils/get-random-number.util";

const Mining = () => {
  const [isAutoMining, setIsAutoMining] = React.useState(false);
  const { addItemToPlayerBag, addMessage, checkHungerValueForSkillSuccess, count, isActive, play, pause, resetMessageList, setIsBusy, startCountdown, calculateExtraItemAmount } = useSkill(
    sound,
    miningConstant.counterLimit
  );

  const canUseMining = useCheckPickAxe();
  const collectWood = useCollectItemForSkill(canUseMining, isActive, startCountdown, play);
  const { hasAutoMining, increaseMiningXP, increaseMiningLevel, miningLevel, miningXP, miningXPToNextLevel } = useMiningStore();

  React.useEffect(() => {
    if (count === 0 && isActive) {
      setIsBusy(false);
      pause();
      if (checkHungerValueForSkillSuccess()) {
        let successChance = 0;
        if (miningLevel <= 10) {
          successChance = 30;
        } else if (miningLevel <= 20 && miningLevel > 10) {
          successChance = 40;
        } else if (miningLevel <= 30 && miningLevel > 20) {
          successChance = 50;
        } else if (miningLevel <= 40 && miningLevel > 30) {
          successChance = 60;
        } else if (miningLevel <= 50 && miningLevel > 40) {
          successChance = 70;
        }
        const success = getRandonNumber(1, 100) <= successChance;

        if (success) {
          const { extraItemAmountFromTool, extraItemsFromToolMessage } = calculateExtraItemAmount();
          const luckPoint = Math.min(miningLevel, miningConstant.bonusLimit);
          const { extraItem, extraItemMessage } = getExtraItemByLevel(luckPoint);
          const itemAmount = extraItem + extraItemAmountFromTool;

          let oreListLevel = 10;
          if (miningLevel >= 20) {
            oreListLevel = 20;
          }
          if (miningLevel >= 30) {
            oreListLevel = 30;
          }
          if (miningLevel >= 40) {
            oreListLevel = 40;
          }
          if (miningLevel >= 50) {
            oreListLevel = 50;
          }
          const { oreDefName, amount } = getOre(oreListLevel);
          const totalAmount = amount + itemAmount;
          addItemToPlayerBag({
            ...itemDefList[oreDefName],
            amount: totalAmount,
          });
          increaseMiningXP(Math.round(totalAmount / 2));
          addMessage({
            text: `You harvested ${itemDefList[oreDefName].name} x${totalAmount}. ${extraItemsFromToolMessage} ${extraItemMessage}`,
            type: "success",
          });
        } else {
          addMessage({
            text: "You failed to harvest anything.",
            type: "error",
          });
          increaseMiningXP(1);
        }
      } else {
        setIsAutoMining(false);
      }
    }

    if (isAutoMining && !isActive) {
      collectWood();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isActive, isAutoMining]);

  React.useEffect(() => {
    if (miningLevel < miningConstant.levelLimit) {
      if (miningXP >= miningXPToNextLevel) {
        increaseMiningLevel();
        addMessage({
          text: `Mining level increased to ${miningLevel + 1}`,
          type: "perfect",
        });
      }
    }
  }, [miningLevel, miningXP, miningXPToNextLevel, increaseMiningLevel, addMessage]);

  React.useEffect(() => {
    return resetMessageList;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border border-gray-500 p-2 mining flex flex-col gap-2">
      <div className="bg-black/70 p-2 flex items-center justify-between gap-1">
        <h3>
          Level: {miningLevel}/{miningConstant.levelLimit}
        </h3>
        <h3>
          XP: {miningXP}/{miningXPToNextLevel}
        </h3>
      </div>
      <div className="bg-black/70 p-2 flex flex-col gap-1">
        <h2>Mining</h2>
        {hasAutoMining && (
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={isAutoMining} onChange={() => setIsAutoMining(!isAutoMining)} />
            <span>Auto Woodcutting</span>
          </label>
        )}
        <ButtonComponent disabled={!canUseMining} onClick={collectWood}>
          {isActive ? `Harvesting ${count}` : "Harvest Ore"}
        </ButtonComponent>
      </div>
      <div className="bg-black/70 p-2">
        +1 ore {miningLevel}% chance. Max {miningConstant.bonusLimit}%
      </div>
    </div>
  );
};

export default React.memo(Mining);

/**
 * 
 * 1 - 10
 * Taş: Her madende bol miktarda bulunur, temel yapı malzemesi olarak kullanılır.
Bakır: Madenciliğin erken seviyelerinde sıkça bulunur, temel alet ve silah yapımında kullanılır.
Kalay: Bronz üretiminde kullanılır, nispeten yaygındır.

11 - 20
Demir: Yaygın bir metal, alet ve zırh yapımında kullanılır. Orta seviyelerde madencilikle bulunur.
Gümüş: Altına göre daha sık bulunur, ticaret ve bazı alet yapımında kullanılır.
Altın: Değerli ve nadir bir metal, yüksek seviye madencilik ile bulunur.

21 - 30
Titanyum: Oldukça değerli ve dayanıklı bir maden, nadir ve zor çıkarılabilir.
Platinyum: Altından daha değerli ve nadir, yüksek seviyelerde çıkarılabilir.
Obsidyen: Güçlü, keskin, volkanik kökenli ve nadir.

31 - 40
Tungsten: Aşırı dayanıklı, güçlü malzemeler için kullanılır, çok nadir bulunur.
Elmas: Mücevher ve endüstriyel kesici aletler için çok değerlidir, nadir ve zor çıkarılabilir.

41 - 50
Volfram: Oyun dünyasının en nadir ve değerli metallerinden biri olabilir, çok zor çıkarılır.
 */
