import React from "react";
import DialogComponent from "../ui/dialog.component";
import useGiftStore from "../store/hooks/use-gift-store.hook";
import formatTime from "../utils/format-time.util";
import { GiftIcon } from "@heroicons/react/24/outline";
import ButtonComponent from "../ui/button.component";
import getRandonNumber from "../utils/get-random-number.util";
import usePlayerBagStore from "../store/hooks/use-player-bag-store.hook";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import getRewardItemList from "../utils/get-reward-item-list";
import sound from "../sounds/chest-opening.mp3";
import useSound from "../custom-hooks/use-sound.hook";
import usePlayerGoldStore from "../store/hooks/use-player-gold-store.hook";

type Props = {
  onClose: () => void;
};

const Gift: React.FC<Props> = ({ onClose }) => {
  const { addGold } = usePlayerGoldStore();
  const { play } = useSound(sound);
  const { addToastrMessage } = useToastrStore();
  const { addItemToPlayerBag } = usePlayerBagStore();
  const { rewardCount, timeSpent, timeToNextReward, rewardLevel, decreaseRewardCount } = useGiftStore();

  const handleOpenGift = React.useCallback(() => {
    const reward = getRewardItemList();
    const minRewardAmount = Math.floor(rewardLevel / 4) || 1;
    const maxRewardAmount = rewardLevel || 1;
    const rewardItemAmount = getRandonNumber(minRewardAmount, maxRewardAmount);
    if (reward === "coin" || reward === "coinDouble") {
      const isDouble = reward === "coinDouble";
      const doubleCoinAmount = rewardItemAmount;
      const coinAmount = rewardItemAmount / 2;
      addToastrMessage({
        text: `You got ${isDouble ? doubleCoinAmount * 2 : coinAmount} coin/s`,
        type: "info",
      });
      addGold(isDouble ? doubleCoinAmount : coinAmount);
    } else {
      reward.amount = rewardItemAmount;
      addToastrMessage({
        text: `You got ${reward.name} x${rewardItemAmount}`,
        type: "info",
      });
      addItemToPlayerBag(reward);
    }
    play();
    decreaseRewardCount();
    /* const randomIndex = getRandonNumber(0, rewards.length - 1);
    const randomReward = rewards[randomIndex];
    const minRewardAmount = Math.floor(rewardLevel / 4) || 1;
    const maxRewardAmount = rewardLevel || 1;
    const rewardItemAmount = getRandonNumber(minRewardAmount, maxRewardAmount);
    if (randomReward.rarity === "common") {
      randomReward.amount = Math.max(1, rewardItemAmount);
    } else {
      randomReward.amount = 1;
    } */

    /* addItemToPlayerBag(reward);
    
    addToastrMessage({
      text: `You got ${reward.name} x ${reward}`,
      type: "info",
    }); */
  }, [addGold, addItemToPlayerBag, addToastrMessage, decreaseRewardCount, play, rewardLevel]);

  return (
    <DialogComponent onClose={onClose} title="Gift" className="gift">
      <ul className="flex flex-col gap-3">
        <li className="flex flex-col gap-1 items-center justify-center">
          <span className="text-3xl">Reward LVL: {rewardLevel}</span>
        </li>
        <li className="flex flex-col gap-1 items-center justify-center">
          <strong>Total time you spend in the game:</strong>
          <span>{formatTime(timeSpent)}</span>
        </li>
        <li className="flex flex-col gap-1 items-center justify-center">
          <span>You get a gift in every half hour.</span>
          <span> {formatTime(timeToNextReward)}</span>
        </li>
        <li className="flex flex-col gap-1 items-center justify-center bg-yellow-500 text-black p-2">
          <strong className="text-3xl">Rewards:</strong>
          <span className="text-3xl">{rewardCount}</span>
          <GiftIcon className="w-32 h-32" />
          {rewardCount > 0 && (
            <ButtonComponent className="bg-black border-black text-white" onClick={handleOpenGift}>
              OPEN
            </ButtonComponent>
          )}
        </li>
      </ul>
    </DialogComponent>
  );
};

export default React.memo(Gift);
