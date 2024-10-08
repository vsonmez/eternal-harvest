import React from "react";
import usePlayerBagStore from "../../store/hooks/use-player-bag-store.hook";
import getCookableItems from "../../utils/get-cookable-items.util";
import ButtonComponent from "../../ui/button.component";
import BagItem from "../../items/models/bag-item.type";
import useMessageStore from "../../store/hooks/use-message-store.hook";
import useCookingStore from "../../store/hooks/skills/use-cooking-store.hook";
import cookingConstant from "../../constants/cooking.constants";
import getRandonNumber from "../../utils/get-random-number.util";
import usePlayerEquipmentStore from "../../store/hooks/use-player-equipment-store.hook";
import useCountdown from "../../custom-hooks/use-countdown.hook";
import usePlayerHungerStore from "../../store/hooks/use-player-hunger-store.hook";
import useGlobalStore from "../../store/hooks/use-global-store.hook";
import itemDefList from "../../items/item-def.list";
import useSound from "../../custom-hooks/use-sound.hook";
import sound from "../../sounds/cooking.mp3";
import Translation from "../../language/transltion";

const Cooking = () => {
  const { play, pause } = useSound({ sound });
  const [isAutoCooking, setIsAutoCooking] = React.useState(false);
  const {
    setIsBusy,
    getGlobal: { language },
  } = useGlobalStore();
  const { decreaseHungerValue } = usePlayerHungerStore();
  const { playerHandItem } = usePlayerEquipmentStore();
  const { cookingLevel, cookingXP, cookingXPToNextLevel, increaseCookingXP, increaseCookingLevel, hasAutoCooking } = useCookingStore();
  const [selectedItem, setSelectedItem] = React.useState<BagItem | undefined>(undefined);
  const { playerBag, addItemToPlayerBag, removeItemFromPlayerBag } = usePlayerBagStore();
  const cookableItems = React.useMemo(() => getCookableItems(Object.values(playerBag)), [playerBag]);
  const { addMessage, resetMessageList } = useMessageStore();
  const { count, isActive, startCountdown } = useCountdown(cookingConstant.counterLimit);

  const cooking = React.useCallback(() => {
    if (!playerHandItem || playerHandItem.defName !== "fryingPan") {
      setIsAutoCooking(false);
      addMessage({
        text: Translation.translateFunctions[language].youNeedItemForSkill("Frying Pan"),
        type: "error",
      });
      return;
    }
    if (!isActive) {
      if (selectedItem) {
        addMessage({
          text: Translation.translate[language].youStartCooking,
          type: "info",
        });
        decreaseHungerValue(0.1);
        setIsBusy(true);
        startCountdown();
        play();
      } else {
        addMessage({
          text: Translation.translate[language].needItemToCraft,
          type: "error",
        });
        setIsAutoCooking(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem, playerHandItem, cookingLevel, isActive, decreaseHungerValue, setIsBusy, startCountdown]);

  const onSelectItem = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const item = playerBag[event.target.value as keyof typeof playerBag];
      if (item) {
        setSelectedItem(item);
      }
    },
    [playerBag]
  );

  React.useEffect(() => {
    if (count === 0 && isActive && selectedItem) {
      setIsBusy(false);
      pause();
      increaseCookingXP(1);
      removeItemFromPlayerBag({
        ...selectedItem,
        amount: 1,
      });
      const randomNumber = getRandonNumber();
      let cookingSuccessChance = 0;

      if (cookingLevel <= 25) {
        cookingSuccessChance = Math.max(25, cookingLevel);
      } else if (cookingLevel < 50) {
        cookingSuccessChance = cookingLevel;
      } else {
        cookingSuccessChance = 50 + cookingLevel / 2;
      }

      if (randomNumber <= cookingSuccessChance && selectedItem.processedItem) {
        addItemToPlayerBag({
          ...itemDefList[selectedItem.processedItem],
          amount: 1,
        });
        addMessage({
          text: Translation.translateFunctions[language].youCrafted(itemDefList[selectedItem.processedItem].name, 1),
          type: "success",
        });
      } else {
        addMessage({
          text: Translation.translate[language].craftingFailed,
          type: "warning",
        });
      }
    }
    if (isAutoCooking && !isActive) {
      cooking();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isActive, selectedItem, isAutoCooking]);

  React.useEffect(() => {
    if (cookingLevel < cookingConstant.levelLimit) {
      if (cookingXP >= cookingXPToNextLevel) {
        increaseCookingLevel();
        addMessage({
          text: `${Translation.translate[language].levelIncreased}: ${Translation.translate[language].cooking} ${cookingLevel + 1}`,
          type: "perfect",
        });
      }
    }
  }, [cookingLevel, cookingXP, cookingXPToNextLevel, increaseCookingLevel, addMessage]);

  React.useEffect(() => {
    return resetMessageList;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border border-gray-500 p-2 cooking flex flex-col gap-2">
      <div className="bg-black/70 p-2 flex items-center justify-between gap-1">
        <h3>
          {Translation.translate[language].level}: {cookingLevel}/{cookingConstant.levelLimit}
        </h3>
        <h3>
          XP: {cookingXP}/{cookingXPToNextLevel}
        </h3>
      </div>
      <div className="bg-black/70 p-2 flex flex-col gap-1 text-center">
        <h2>{Translation.translate[language].cooking}</h2>
        <select value={selectedItem?.defName} className="w-full bg-black/70" disabled={cookableItems.length === 0} onChange={onSelectItem}>
          <option value={undefined}>{Translation.translate[language].selectItemToCraft}</option>
          {cookableItems.map((item) => (
            <option value={item.defName} key={item.defName}>
              {item.name} ({item.amount})
            </option>
          ))}
        </select>
        {hasAutoCooking && (
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={isAutoCooking} onChange={() => setIsAutoCooking(!isAutoCooking)} />
            <span>{Translation.translate[language].autoCooking}</span>
          </label>
        )}
        <ButtonComponent disabled={cookableItems.length === 0} onClick={cooking}>
          {isActive ? `${Translation.translate[language].cooking} ${count}` : Translation.translate[language].craft}
        </ButtonComponent>
      </div>
    </div>
  );
};

export default React.memo(Cooking);
