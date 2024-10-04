import React from "react";
import useCountdown from "../../custom-hooks/use-countdown.hook";
import useGlobalStore from "../../store/hooks/use-global-store.hook";
import useMessageStore from "../../store/hooks/use-message-store.hook";
import usePlayerEquipmentStore from "../../store/hooks/use-player-equipment-store.hook";
import usePlayerHungerStore from "../../store/hooks/use-player-hunger-store.hook";
import ButtonComponent from "../../ui/button.component";
import beggingSound from "../../sounds/begging.mp3";
import useSound from "../../custom-hooks/use-sound.hook";
import useBeggingStore from "../../store/hooks/skills/use-begging-store.hook";
import beggingConstant from "../../constants/begging.constants";
import getBeggingItem from "../../utils/get-begging-item.util";
import usePlayerGoldStore from "../../store/hooks/use-player-gold-store.hook";
import usePlayerBagStore from "../../store/hooks/use-player-bag-store.hook";
import getRandonNumber from "../../utils/get-random-number.util";
import DecepitonComponent from "../deception/decepiton.component";
import useDeceptionStore from "../../store/hooks/skills/use-deception-store.hook";
import FixedNumberComponent from "../../ui/fixed-number.component";

const Begging = () => {
  const [isAutoBegging, setIsAutoBegging] = React.useState(false);
  const [checkDeceptionEXPgain, setCheckDeceptionEXPgain] = React.useState(false);
  const { addItemToPlayerBag } = usePlayerBagStore();
  const { addGold } = usePlayerGoldStore();
  const { beggingLevel, beggingXP, beggingXPToNextLevel, increaseBeggingXP, increaseBeggingLevel, hasAutoBegging } = useBeggingStore();
  const { play } = useSound({ sound: beggingSound, playbackRate: 0.6 });
  const { playerHandItem } = usePlayerEquipmentStore();
  const { addMessage, resetMessageList } = useMessageStore();
  const { count, isActive, startCountdown } = useCountdown(beggingConstant.counterLimit);
  const { decreaseHungerValue } = usePlayerHungerStore();
  const { setIsBusy } = useGlobalStore();
  const { deceptionLevel } = useDeceptionStore();
  const deceptionBonus = React.useMemo(() => deceptionLevel / 3, [deceptionLevel]);

  const begging = React.useCallback(() => {
    debugger;
    if (playerHandItem) {
      addMessage({
        text: "Your hand must be empty.",
        type: "warning",
      });
      return;
    }
    if (!isActive) {
      if (checkDeceptionEXPgain) {
        setCheckDeceptionEXPgain(false);
      }
      addMessage({
        text: "You start begging...",
        type: "info",
      });
      decreaseHungerValue(0.3);
      setIsBusy(true);
      startCountdown();
      play();
    }
  }, [playerHandItem, addMessage, decreaseHungerValue, isActive, startCountdown, setIsBusy, play, checkDeceptionEXPgain]);

  React.useEffect(() => {
    if (count === 0 && isActive) {
      setIsBusy(false);
      const beggingRewardResult = getBeggingItem(beggingLevel, deceptionBonus);
      if (beggingRewardResult) {
        if (beggingRewardResult === "coin" || beggingRewardResult === "coinDouble") {
          const isDouble = beggingRewardResult === "coinDouble";
          const coinAmount = getRandonNumber(1, beggingLevel) / 100;
          const doubleCoinAmount = coinAmount * 2;
          addMessage({
            text: `You got ${Number(isDouble ? doubleCoinAmount : coinAmount).toFixed(2)} coin/s.`,
            type: "success",
          });
          addGold(isDouble ? doubleCoinAmount : coinAmount);
        } else {
          addMessage({
            text: `You got ${beggingRewardResult.name} x${beggingRewardResult.amount}.`,
            type: "success",
          });
          addItemToPlayerBag(beggingRewardResult);
        }
      } else {
        addMessage({
          text: "You didn't get anything.",
          type: "info",
        });
      }
      increaseBeggingXP(1);
      if (beggingLevel >= 10) {
        setCheckDeceptionEXPgain(true);
      }
    }

    if (isAutoBegging && !isActive) {
      begging();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isActive, beggingLevel, isAutoBegging]);

  React.useEffect(() => {
    if (beggingLevel < beggingConstant.levelLimit) {
      if (beggingXP >= beggingXPToNextLevel) {
        increaseBeggingLevel();
        addMessage({
          text: `Begging level increased to ${beggingLevel + 1}`,
          type: "perfect",
        });
      }
    }
  }, [beggingLevel, beggingXP, beggingXPToNextLevel, increaseBeggingLevel, addMessage]);

  React.useEffect(() => {
    return resetMessageList;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border border-gray-500 p-2 begging flex flex-col gap-2">
      <div className="bg-black/70 p-2 flex items-center justify-between gap-1">
        <h3>
          Level: {beggingLevel}/{beggingConstant.levelLimit}
        </h3>
        <h3>
          XP: {beggingXP}/{beggingXPToNextLevel}
        </h3>
      </div>
      <div className="flex justify-between items-center gap-2">
        <DecepitonComponent checkEXPgain={checkDeceptionEXPgain} />
        <div className="bg-black/70 p-2 flex flex-col gap-1 text-center">
          <h2>Begging</h2>
          {hasAutoBegging && (
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={isAutoBegging} onChange={() => setIsAutoBegging(!isAutoBegging)} />
              <span>Auto Begging</span>
            </label>
          )}
          <ButtonComponent className=" w-[102px]" onClick={begging}>
            {isActive ? `Begging ${count}` : "Start Begging"}
          </ButtonComponent>
        </div>
      </div>
      <div className="bg-black/70 p-2 flex flex-col gap-1">
        <span>Begging level affects the amount of items gained.</span>
        <span>
          +<FixedNumberComponent number={deceptionBonus} />% success bonus from Deception.
        </span>
      </div>
    </div>
  );
};

export default Begging;
