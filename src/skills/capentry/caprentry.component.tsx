import React from "react";
import ButtonComponent from "../../ui/button.component";
import useGlobalStore from "../../store/hooks/use-global-store.hook";
import usePlayerEquipmentStore from "../../store/hooks/use-player-equipment-store.hook";
import usePlayerHungerStore from "../../store/hooks/use-player-hunger-store.hook";
import BagItem from "../../items/models/bag-item.type";
import usePlayerBagStore from "../../store/hooks/use-player-bag-store.hook";
import useMessageStore from "../../store/hooks/use-message-store.hook";
import useCountdown from "../../custom-hooks/use-countdown.hook";
import carpentryConstant from "../../constants/carpentry.constants";
import useCarpentryStore from "../../store/hooks/skills/use-carpentry-store.hook";
import getCarpentryMaterials from "../../utils/get-carpentry-materials.util";
import sound from "../../sounds/carpentry.mp3";
import useSound from "../../custom-hooks/use-sound.hook";
import itemDefList from "../../items/item-def.list";
import getRandonNumber from "../../utils/get-random-number.util";

const Capentry = () => {
  const { play, pause } = useSound({ sound });
  const [isAutoCarpentry, setIsAutoCarpentry] = React.useState(false);
  const { setIsBusy } = useGlobalStore();
  const { decreaseHungerValue } = usePlayerHungerStore();
  const { playerHandItem } = usePlayerEquipmentStore();
  const [selectedItem, setSelectedItem] = React.useState<BagItem | undefined>(undefined);
  const { playerBag, addItemToPlayerBag, removeItemFromPlayerBag } = usePlayerBagStore();
  const { addMessage, resetMessageList } = useMessageStore();
  const { count, isActive, startCountdown } = useCountdown(carpentryConstant.counterLimit);
  const carpentryMaterials = React.useMemo(() => getCarpentryMaterials(Object.values(playerBag)), [playerBag]);
  const { carpentryLevel, carpentryXP, carpentryXPToNextLevel, hasAutoCarpentry, increaseCarpentryLevel, increaseCarpentryXP } = useCarpentryStore();

  const crafting = React.useCallback(() => {
    if (!playerHandItem || playerHandItem.defName !== "carpenterHammer") {
      setIsAutoCarpentry(false);
      addMessage({
        text: "You need to be holding a carpenter hammer to craft something.",
        type: "error",
      });
      return;
    }
    if (!isActive) {
      if (selectedItem) {
        addMessage({
          text: "You start crafting...",
          type: "info",
        });
        decreaseHungerValue(0.1);
        setIsBusy(true);
        startCountdown();
        play();
      } else {
        addMessage({
          text: "You need to select an item to craft.",
          type: "error",
        });
        setIsAutoCarpentry(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem, playerHandItem, carpentryLevel, isActive, decreaseHungerValue, setIsBusy, startCountdown]);

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
      increaseCarpentryXP(1);
      removeItemFromPlayerBag({
        ...selectedItem,
        amount: 1,
      });
      const randomNumber = getRandonNumber();
      let cookingSuccessChance = 0;

      if (carpentryLevel <= 25) {
        cookingSuccessChance = Math.max(25, carpentryLevel);
      } else if (carpentryLevel < 50) {
        cookingSuccessChance = carpentryLevel;
      } else {
        cookingSuccessChance = 50 + carpentryLevel / 2;
      }

      if (randomNumber <= cookingSuccessChance && selectedItem.processedItem) {
        addItemToPlayerBag({
          ...itemDefList[selectedItem.processedItem],
          amount: 1,
        });
        addMessage({
          text: `Crafting is done. You got ${itemDefList[selectedItem.processedItem].name}.`,
          type: "success",
        });
      } else {
        addMessage({
          text: "Crafting failed. Materials were broken into pieces.",
          type: "warning",
        });
      }
    }
    if (isAutoCarpentry && !isActive) {
      crafting();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isActive, selectedItem, isAutoCarpentry]);

  React.useEffect(() => {
    if (carpentryLevel < carpentryConstant.levelLimit) {
      if (carpentryXP >= carpentryXPToNextLevel) {
        increaseCarpentryLevel();
        addMessage({
          text: `Carpentry level increased to ${carpentryLevel + 1}`,
          type: "perfect",
        });
      }
    }
  }, [carpentryLevel, carpentryXP, carpentryXPToNextLevel, increaseCarpentryLevel, addMessage]);

  React.useEffect(() => {
    return resetMessageList;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border border-gray-500 p-2 carpenter flex flex-col gap-2">
      <div className="bg-black/70 p-2 flex items-center justify-between gap-1">
        <h3>
          Level: {carpentryLevel}/{carpentryConstant.levelLimit}
        </h3>
        <h3>
          XP: {carpentryXP}/{carpentryXPToNextLevel}
        </h3>
      </div>
      <div className="bg-black/70 p-2 flex flex-col gap-1 text-center">
        <h2>Carpentry</h2>
        <select value={selectedItem?.defName} className="w-full bg-black/70" disabled={carpentryMaterials.length === 0} onChange={onSelectItem}>
          <option value={undefined}>Select Item to craft</option>
          {carpentryMaterials.map((item) => (
            <option value={item.defName} key={item.defName}>
              {item.name} ({item.amount})
            </option>
          ))}
        </select>
        {hasAutoCarpentry && (
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={isAutoCarpentry} onChange={() => setIsAutoCarpentry(!isAutoCarpentry)} />
            <span>Auto Cooking</span>
          </label>
        )}
        <ButtonComponent disabled={carpentryMaterials.length === 0} onClick={crafting}>
          {isActive ? `Crafting ${count}` : "Start Crafting"}
        </ButtonComponent>
      </div>
    </div>
  );
};

export default React.memo(Capentry);
