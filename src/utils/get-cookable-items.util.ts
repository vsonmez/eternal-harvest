import BagItem from "../items/models/bag-item.type";

const getCookableItems = (bagItems: BagItem[]) => bagItems.filter((item) => item.isCookable);

export default getCookableItems;
