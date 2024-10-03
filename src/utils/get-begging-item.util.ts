import itemDefList from "../items/item-def.list";
import getRandonNumber from "./get-random-number.util";

const getBeggingItem = (beggingLevel: number, deceptionBonus: number) => {
  const rewards = [
    { defname: "coin", probability: 60 },
    { defname: "oldGlove", probability: 55 },
    { defname: "oldBandana", probability: 50 },
    { defname: "oldHat", probability: 45 },
    { defname: "oldShirt", probability: 40 },
    { defname: "oldShoes", probability: 35 },
    { defname: "oldTrousers", probability: 30 },
    { defname: "oldBoots", probability: 25 },
    { defname: "banana", probability: 20 },
    { defname: "carrot", probability: 10 },
    { defname: "bread", probability: 5 },
    { defname: "bakedFish", probability: 3 },
    { defname: "coinDouble", probability: 1 },
  ];

  if (getRandonNumber() < 30 + deceptionBonus) {
    const luckPoint = getRandonNumber();
    const reward = rewards.find((reward) => luckPoint >= reward.probability)!;
    if (reward.defname === "coin" || reward.defname === "coinDouble") {
      return reward.defname;
    }
    const rewardItem = itemDefList[reward.defname];
    const maxAmount = Math.min(10, Math.floor(beggingLevel / 4));
    rewardItem.amount = getRandonNumber(1, maxAmount);
    return itemDefList[reward.defname];
  }
  return false;
};

export default getBeggingItem;
