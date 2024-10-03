import React from "react";
import BagItem from "../../items/models/bag-item.type";

type Props = {
  item: BagItem;
};

const itemLockedWarning: React.FC<Props> = ({ item }) => {
  if (item.isLocked) {
    return <span className="text-rose-300 font-light text-xs italic">Cannot be sold because it is locked.</span>;
  }
  return <></>;
};

export default React.memo(itemLockedWarning);
