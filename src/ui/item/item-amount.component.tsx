import React from "react";
import BagItem from "../../items/models/bag-item.type";

type Props = {
  item: BagItem;
};
const ItemAmount: React.FC<Props> = ({ item }) => {
  if (item.isEquipped) {
    if (item.amount > 1) {
      return <>x{item.amount - 1}</>;
    }
  } else {
    if (item.amount > 1) {
      return <>x{item.amount}</>;
    }
  }

  return <></>;
};

export default React.memo(ItemAmount);
