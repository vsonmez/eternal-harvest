import React from "react";
import ButtonComponent from "../button.component";

type Props = {
  filterItems: (itemType: ItemType | undefined) => void;
  isInBag?: boolean;
};

const ItemfilterButtons: React.FC<Props> = ({ filterItems, isInBag }) => {
  const [selectedFilter, setSelectedFilter] = React.useState<ItemType | undefined>(undefined);

  const handleFilter = (itemType: ItemType | undefined) => {
    setSelectedFilter(itemType);
    filterItems(itemType);
  };
  return (
    <>
      <ButtonComponent className={`border-r-0 ${selectedFilter === undefined ? "bg-gray-600" : ""}`} onClick={() => handleFilter(undefined)}>
        All
      </ButtonComponent>
      <ButtonComponent className={`${selectedFilter === "food" ? "bg-gray-600" : ""}`} onClick={() => handleFilter("food")}>
        Foods
      </ButtonComponent>
      <ButtonComponent className={`border-x-0 ${selectedFilter === "clothes" ? "bg-gray-600" : ""}`} onClick={() => handleFilter("clothes")}>
        Clothes
      </ButtonComponent>
      <ButtonComponent className={`${selectedFilter === "tool" ? "bg-gray-600" : ""}`} onClick={() => handleFilter("tool")}>
        Tools
      </ButtonComponent>
      {isInBag && (
        <ButtonComponent className={`${selectedFilter === "rawMaterial" ? "bg-gray-600" : ""}`} onClick={() => handleFilter("rawMaterial")}>
          Materials
        </ButtonComponent>
      )}
    </>
  );
};

export default ItemfilterButtons;
