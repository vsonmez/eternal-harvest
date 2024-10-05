import Item from "./models/item.type";

const clothesDefList: {
  [key: string]: Item;
} = {
  oldShirt: {
    name: "Old Shirt",
    description: "An old shirt.",
    defName: "oldShirt",
    price: 0.04,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: false,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "body",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  oldHat: {
    name: "Old Hat",
    description: "An old hat.",
    defName: "oldHat",
    price: 0.03,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: false,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "head",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  oldBandana: {
    name: "Old Bandana",
    description: "An old bandana.",
    defName: "oldBandana",
    price: 0.02,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: false,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "head",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  oldGlove: {
    name: "Old Glove",
    description: "An old glove.",
    defName: "oldGlove",
    price: 0.02,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: false,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "handLeft",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  oldBoots: {
    name: "Old Boots",
    description: "An old boots.",
    defName: "oldBoots",
    price: 0.07,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: false,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "feet",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  oldShoes: {
    name: "Old Shoes",
    description: "An old shoes.",
    defName: "oldShoes",
    price: 0.05,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: false,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "feet",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  oldTrousers: {
    name: "Old Trousers",
    description: "An old trousers.",
    defName: "oldTrousers",
    price: 0.05,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: false,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "legs",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  whiteHat: {
    name: "White Hat",
    description: "A white hat.",
    defName: "whiteHat",
    price: 1.2,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "head",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  blueHat: {
    name: "Blue Hat",
    description: "A blue hat.",
    defName: "blueHat",
    price: 1.2,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "head",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  orangeHat: {
    name: "Orange Hat",
    description: "An orange hat.",
    defName: "orangeHat",
    price: 1.2,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "head",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  whiteShirt: {
    name: "White Shirt",
    description: "A white shirt.",
    defName: "whiteShirt",
    price: 1.5,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "body",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  blueShirt: {
    name: "Blue Shirt",
    description: "A blue shirt.",
    defName: "blueShirt",
    price: 1.5,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "body",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  orangeShirt: {
    name: "Orange Shirt",
    description: "An orange shirt.",
    defName: "orangeShirt",
    price: 1.5,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "body",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  whiteShoes: {
    name: "White Shoes",
    description: "A white shoes.",
    defName: "whiteShoes",
    price: 1.7,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "feet",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  blueShoes: {
    name: "Blue Shoes",
    description: "A blue shoes.",
    defName: "blueShoes",
    price: 1.7,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "feet",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  orangeShoes: {
    name: "Orange Shoes",
    description: "An orange shoes.",
    defName: "orangeShoes",
    price: 1.7,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "feet",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  whiteTrousers: {
    name: "White Trousers",
    description: "A white trousers.",
    defName: "whiteTrousers",
    price: 2,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "legs",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  blueTrousers: {
    name: "Blue Trousers",
    description: "A blue trousers.",
    defName: "blueTrousers",
    price: 2,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "legs",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  orangeTrousers: {
    name: "Orange Trousers",
    description: "An orange trousers.",
    defName: "orangeTrousers",
    price: 2,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "legs",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: undefined,
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  woodcutterHat: {
    name: "Woodcutter Hat",
    description: "A woodcutter hat. +1 wood 10% chance.",
    defName: "woodcutterHat",
    price: 20,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "head",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 5,
    requiredSkill: "Woodcutting",
    rarity: "common",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 1,
      itemChance: 10,
    },
  },
  woodcutterhatUncommon: {
    name: "Woodcutter Hat",
    description: "A woodcutter hat. +1 wood 20% chance.",
    defName: "woodcutterhatUncommon",
    price: 50,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "head",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 10,
    requiredSkill: "Woodcutting",
    rarity: "uncommon",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 1,
      itemChance: 20,
    },
  },
  woodcutterHatRare: {
    name: "Woodcutter Hat",
    description: "A woodcutter hat. +1 wood 30% chance.",
    defName: "woodcutterHatRare",
    price: 100,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "head",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 15,
    requiredSkill: "Woodcutting",
    rarity: "rare",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 1,
      itemChance: 30,
    },
  },
  woodcutterHatEpic: {
    name: "Woodcutter Hat",
    description: "A woodcutter hat. +2 wood 40% chance.",
    defName: "woodcutterHatEpic",
    price: 200,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "head",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 20,
    requiredSkill: "Woodcutting",
    rarity: "epic",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 2,
      itemChance: 40,
    },
  },
  woodcutterHatLegendary: {
    name: "Woodcutter Hat",
    description: "A woodcutter hat. +2 wood 50% chance.",
    defName: "woodcutterHatLegendary",
    price: 300,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "head",
    amount: 0,
    hp: {
      max: 0,
      current: 0,
    },
    isLocked: false,
    requiredLevel: 25,
    requiredSkill: "Woodcutting",
    rarity: "legendary",
    hungerRestore: 0,
    itemType: "clothes",
    bonuses: {
      countdownTime: 0,
      itemAmount: 2,
      itemChance: 50,
    },
  },
};

export default clothesDefList;
