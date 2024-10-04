import Item from "./item.type";

type BagItem = Pick<Item, "isEquipped" | "defName" | "amount" | "isLocked" | "equipSlot" | "itemType" | "bonuses" | "isCookable" | "name">;

export default BagItem;
