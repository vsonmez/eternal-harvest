import React from "react";
import BagItem from "../../items/models/bag-item.type";
import getItemDef from "../../utils/get-item-def.util";

type Props = {
  item: BagItem;
};

const ItemDescription: React.FC<Props> = ({ item }) => {
  const itemDef = React.useMemo(() => getItemDef(item.defName), [item]);
  return (
    <>
      <span className="italic font-thin">{itemDef.description}</span>
      {itemDef.requiredLevel > 0 && (
        <span className="italic font-thin text-orange-300">
          {itemDef.requiredSkill} level: {itemDef.requiredLevel}
        </span>
      )}
    </>
  );
};

export default React.memo(ItemDescription);
