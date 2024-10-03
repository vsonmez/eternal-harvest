type Item = {
  readonly name: string;
  readonly description: string;
  readonly defName: string;
  readonly price: number;
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
};

export default Item;
