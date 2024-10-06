import Item from "./models/item.type";
import toolFishingRodDefList from "./tool-fishing-rod.list";
import toolPickaxeDefList from "./tool-pickaxe.list";
import toolWoodcutterAxeDefList from "./tool-woodcutter-axe.list";

const toolDefList: {
  [key: string]: Item;
} = {
  fryingPan: {
    name: "Frying Pan",
    description: "A frying pan for frying food.",
    defName: "fryingPan",
    price: 10,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "hand",
    amount: 0,
    hungerRestore: 0,
    hp: {
      max: 50,
      current: 50,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: "Cooking",
    rarity: "common",
    itemType: "tool",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  carpenterHammer: {
    name: "Carpenter Hammer",
    description: "A hammer for carpentry.",
    defName: "carpenterHammer",
    price: 10,
    isCookable: false,
    processedItem: undefined,
    isEdible: false,
    isSalable: true,
    isBuyable: true,
    isEquipable: true,
    isEquipped: false,
    equipSlot: "hand",
    amount: 0,
    hungerRestore: 0,
    hp: {
      max: 50,
      current: 50,
    },
    isLocked: false,
    requiredLevel: 0,
    requiredSkill: "Carpentry",
    rarity: "common",
    itemType: "tool",
    bonuses: {
      countdownTime: 0,
      itemAmount: 0,
      itemChance: 0,
    },
  },
  ...toolFishingRodDefList,
  ...toolWoodcutterAxeDefList,
  ...toolPickaxeDefList,
};

export default toolDefList;
