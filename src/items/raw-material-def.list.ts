import Item from "./models/item.type";

const rawMaterialDefList: {
  [key: string]: Item;
} = {
  wood: {
    name: "Wood",
    description: "A piece of wood.",
    defName: "wood",
    price: 0.3,
    isCookable: false,
    isEdible: false,
    isSalable: true,
    isBuyable: false,
    isEquipable: false,
    isEquipped: false,
    equipSlot: undefined,
    amount: 0,
    hungerRestore: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    itemType: "rawMaterial",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  rawFish: {
    name: "Raw Fish",
    description: "A raw fish. You can not eat it but you can cook it.",
    defName: "rawFish",
    price: 0.2,
    isCookable: true,
    isEdible: false,
    isSalable: true,
    isBuyable: false,
    isEquipable: false,
    isEquipped: false,
    equipSlot: undefined,
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    itemType: "rawMaterial",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
    hungerRestore: 0,
  },
};

export default rawMaterialDefList;
