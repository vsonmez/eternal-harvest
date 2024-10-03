import React from "react";
import Item from "../items/models/item.type";
import BuyButtonComponent from "./buy-button.component";
import ItemNameImageComponent from "../ui/item/item-name-image.component";
import ItemDescriptionComponent from "../ui/item/item-description.component";

type Props = {
  item: Item;
};

const MarketItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col gap-1 border p-2">
      <ItemNameImageComponent item={item} />
      <ItemDescriptionComponent item={item} />
      <BuyButtonComponent item={item} />
    </div>
  );
};

export default React.memo(MarketItem);
