import React from "react";
import ButtonComponent from "../button.component";
import useGlobalStore from "../../store/hooks/use-global-store.hook";
import Translation from "../../language/transltion";

type Props = {
  filterItems: (itemType: ItemType | undefined) => void;
  isInBag?: boolean;
};

const ItemfilterButtons: React.FC<Props> = ({ filterItems, isInBag }) => {
  const {
    getGlobal: { language },
  } = useGlobalStore();
  const [selectedFilter, setSelectedFilter] = React.useState<ItemType | undefined>(undefined);

  const handleFilter = (itemType: ItemType | undefined) => {
    setSelectedFilter(itemType);
    filterItems(itemType);
  };
  return (
    <>
      <ButtonComponent className={`border-r-0 ${selectedFilter === undefined ? "bg-gray-600" : ""}`} onClick={() => handleFilter(undefined)}>
        {Translation.translate[language].all}
      </ButtonComponent>
      <ButtonComponent className={`${selectedFilter === "food" ? "bg-gray-600" : ""}`} onClick={() => handleFilter("food")}>
        {Translation.translate[language].foods}
      </ButtonComponent>
      <ButtonComponent className={`border-x-0 ${selectedFilter === "clothes" ? "bg-gray-600" : ""}`} onClick={() => handleFilter("clothes")}>
        {Translation.translate[language].clothes}
      </ButtonComponent>
      <ButtonComponent className={`${selectedFilter === "tool" ? "bg-gray-600" : ""}`} onClick={() => handleFilter("tool")}>
        {Translation.translate[language].tools}
      </ButtonComponent>
      {isInBag && (
        <ButtonComponent className={`border-l-0 ${selectedFilter === "rawMaterial" ? "bg-gray-600" : ""}`} onClick={() => handleFilter("rawMaterial")}>
          {Translation.translate[language].materials}
        </ButtonComponent>
      )}
    </>
  );
};

export default ItemfilterButtons;
