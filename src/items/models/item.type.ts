import itemDefList from "../item-def.list";
export type ItemDefName = keyof typeof itemDefList;
type Item = {
  readonly name: string;
  readonly description: string;
  readonly defName: ItemDefName;
  readonly price: number;
  readonly isCookable: boolean;
  readonly isEdible: boolean;
  readonly isSalable: boolean;
  readonly isBuyable: boolean;
  readonly isEquipable: boolean;
  isEquipped: boolean;
  readonly equipSlot: ItemEqipSlot;
  amount: number;
  readonly hungerRestore: number;
  isLocked: boolean;
  readonly requiredLevel: number;
  readonly requiredSkill: string | undefined;
  readonly rarity: ItemRarity;
  readonly itemType: ItemType;
  readonly bonuses: {
    countdownTime: number;
    itemAmount: number;
    itemChance: number;
  };
  readonly hp: {
    readonly max: number;
    current: number;
  };
  readonly processedItem: ItemDefName;
};

export default Item;
