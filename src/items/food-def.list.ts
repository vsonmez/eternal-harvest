import Item from "./models/item.type";

const foodDefList: {
  [key: string]: Item;
} = {
  carrot: {
    name: "Carrot",
    description: "A piece of carrot. Restore 2 hunger.",
    defName: "carrot",
    price: 0.2,
    isEdible: true,
    isSalable: true,
    isBuyable: true,
    isEquipable: false,
    isEquipped: false,
    equipSlot: undefined,
    amount: 0,
    isCookable: false,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 2,
    itemType: "food",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  banana: {
    name: "Banana",
    description: "A piece of banana. Restore 2 hunger.",
    defName: "banana",
    price: 0.2,
    isEdible: true,
    isSalable: true,
    isBuyable: true,
    isEquipable: false,
    isEquipped: false,
    equipSlot: undefined,
    amount: 0,
    isCookable: false,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 2,
    itemType: "food",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  bread: {
    name: "Bread",
    description: "A loaf of bread. Restore 5 hunger.",
    defName: "bread",
    price: 0.5,
    isEdible: true,
    isSalable: true,
    isBuyable: true,
    isEquipable: false,
    isEquipped: false,
    equipSlot: undefined,
    amount: 0,
    isCookable: false,
    hp: {
      max: 0,
      current: 0,
    },
    hungerRestore: 5,
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    itemType: "food",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  bakedFish: {
    name: "Baked Fish",
    description: "A baked fish. Restore 10 hunger.",
    defName: "bakedFish",
    price: 1,
    isEdible: true,
    isSalable: true,
    isBuyable: true,
    isEquipable: false,
    isEquipped: false,
    equipSlot: undefined,
    amount: 0,
    isCookable: false,
    hp: {
      max: 0,
      current: 0,
    },
    hungerRestore: 10,
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    itemType: "food",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
};

export default foodDefList;
