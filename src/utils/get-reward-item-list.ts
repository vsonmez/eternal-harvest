import itemDefList from "../items/item-def.list";
import getRandonNumber from "./get-random-number.util";

const getRewardItemList = () => {
  const clothesRewards = [
    { defname: "whiteHat", probability: 7 },
    { defname: "blueHat", probability: 7 },
    { defname: "orangeHat", probability: 7 },
    { defname: "whiteShirt", probability: 7 },
    { defname: "blueShirt", probability: 7 },
    { defname: "orangeShirt", probability: 7 },
    { defname: "whiteShoes", probability: 7 },
    { defname: "blueShoes", probability: 7 },
    { defname: "orangeShoes", probability: 7 },
    { defname: "whiteTrousers", probability: 7 },
    { defname: "blueTrousers", probability: 7 },
    { defname: "orangeTrousers", probability: 7 },
  ];
  const randomClothesIndex = getRandonNumber(0, clothesRewards.length - 1);
  const randomClothes = clothesRewards[randomClothesIndex];

  const rewards = [
    { defname: "coin", probability: 60 },
    { defname: "wood", probability: 50 },
    { defname: "banana", probability: 40 },
    { defname: "carrot", probability: 30 },
    { defname: "bread", probability: 20 },
    { defname: "bakedFish", probability: 10 },
    { ...randomClothes },
    { defname: "woodcuttersAxe", probability: 3 },
    { defname: "woodcuttersAxeUncommon", probability: 2 },
    { defname: "coinDouble", probability: 1 },
  ];

  const luckPoint = getRandonNumber();
  const reward = rewards.find((reward) => luckPoint >= reward.probability)!;
  if (reward.defname === "coin" || reward.defname === "coinDouble") {
    return reward.defname;
  }
  const rewardItem = itemDefList[reward.defname];
  return rewardItem;
};

export default getRewardItemList;
