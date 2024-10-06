import BagItem from "../items/models/bag-item.type";

const getCarpentryMaterials = (itemList: BagItem[]) => {
  const carpentryMaterials = itemList.filter((item) => item.defName === "wood");
  return carpentryMaterials;
};

export default getCarpentryMaterials;
