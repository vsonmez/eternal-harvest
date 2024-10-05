import getRandonNumber from "./get-random-number.util";

const miningLevelToOreProbabilities: {
  [miningLevel: number]: {
    name: string;
    probability: number;
  }[];
} = {
  10: [
    { name: "stoneOre", probability: 100 },
    { name: "copperOre", probability: 80 },
    { name: "tinOre", probability: 70 },
  ],
  20: [
    { name: "stoneOre", probability: 100 },
    { name: "copperOre", probability: 80 },
    { name: "tinOre", probability: 70 },
    { name: "ironOre", probability: 60 },
    { name: "silverOre", probability: 50 },
    { name: "goldOre", probability: 30 },
  ],
  30: [
    { name: "stoneOre", probability: 100 },
    { name: "copperOre", probability: 80 },
    { name: "tinOre", probability: 70 },
    { name: "ironOre", probability: 60 },
    { name: "silverOre", probability: 50 },
    { name: "goldOre", probability: 30 },
    { name: "titaniumOre", probability: 25 },
    { name: "platinumOre", probability: 20 },
    { name: "obsidianOre", probability: 15 },
  ],
  40: [
    { name: "tungstenOre", probability: 100 },
    { name: "diamondOre", probability: 80 },
  ],
  50: [
    { name: "stoneOre", probability: 100 },
    { name: "copperOre", probability: 80 },
    { name: "tinOre", probability: 70 },
    { name: "ironOre", probability: 60 },
    { name: "silverOre", probability: 50 },
    { name: "goldOre", probability: 30 },
    { name: "titaniumOre", probability: 25 },
    { name: "platinumOre", probability: 20 },
    { name: "obsidianOre", probability: 15 },
    { name: "tungstenOre", probability: 10 },
    { name: "diamondOre", probability: 5 },
    { name: "wolframOre", probability: 1 },
  ],
};

const getOre = (miningLevel: number): { oreDefName: string; amount: number } => {
  const maxAmount = Math.min(5, miningLevel);
  const oreProbabilities = miningLevelToOreProbabilities[miningLevel];
  const luckPoint = getRandonNumber(1, 200);
  const selectedOre = oreProbabilities.find((ore) => luckPoint >= ore.probability) || oreProbabilities[oreProbabilities.length - 1];

  return {
    oreDefName: selectedOre.name,
    amount: getRandonNumber(1, maxAmount),
  };
};

export default getOre;
