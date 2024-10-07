import React from "react";
import BagItem from "../../items/models/bag-item.type";
import useGlobalStore from "../../store/hooks/use-global-store.hook";
import Translation from "../../language/transltion";

type Props = {
  item: BagItem;
};

const ItemLockedWarning: React.FC<Props> = ({ item }) => {
  const {
    getGlobal: { language },
  } = useGlobalStore();

  if (item.isLocked) {
    return <span className="text-rose-300 font-light text-xs italic">{Translation.translate[language].cannotSoldLocked}</span>;
  }
  return <></>;
};

export default React.memo(ItemLockedWarning);
