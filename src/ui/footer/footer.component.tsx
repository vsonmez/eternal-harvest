import React from "react";
import ButtonComponent from "../button.component";
import MarketComponent from "../../market/market.component";
import InventoryComponent from "../../inventory/inventory.component";
import EquipmentComponent from "../../equipment/equipment.component";
import SkillActionSelectComponent from "../../skill-actions/skill-action-select.component";
import GiftButtonComponent from "./gift-button.component";
import { ArchiveBoxIcon, ArrowsUpDownIcon, BoltIcon, BuildingStorefrontIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import TravelComponent from "../../travel/travel.component";
import useTravelStore from "../../store/hooks/use-travel-store.hook";
import useMessageStore from "../../store/hooks/use-message-store.hook";
import travelConstants from "../../constants/travel.constants";

const Footer = () => {
  const { currentLocation } = useTravelStore();
  const { addMessage } = useMessageStore();
  const initialShowState: { [key in DialogTypes]: boolean } = React.useMemo(() => {
    return {
      market: false,
      inventory: false,
      equipment: false,
      skillActions: false,
      gift: false,
      travel: false,
    };
  }, []);

  const [show, setShow] = React.useState<{
    [key in DialogTypes]: boolean;
  }>({
    market: false,
    inventory: false,
    equipment: false,
    skillActions: false,
    gift: false,
    travel: false,
  });

  const handleShow = React.useCallback(
    (key: DialogTypes) => {
      if (key === "market" && currentLocation !== "marketPlace") {
        addMessage({
          text: `You can only see the Market in the ${travelConstants.travelLocations.marketPlace}.`,
          type: "warning",
        });
        return;
      }
      setShow({
        ...initialShowState,
        [key]: !show[key],
      });
    },
    [show, initialShowState, currentLocation, addMessage]
  );

  const handleClose = React.useCallback(() => {
    setShow(initialShowState);
  }, [initialShowState]);

  return (
    <>
      <footer className="flex gap-2 p-2 border-t border-gray-500">
        <ButtonComponent onClick={() => handleShow("market")}>
          <BuildingStorefrontIcon className="w-5 h-5" />
        </ButtonComponent>
        <ButtonComponent onClick={() => handleShow("inventory")}>
          <ArchiveBoxIcon className="w-5 h-5" />
        </ButtonComponent>
        <ButtonComponent onClick={() => handleShow("equipment")}>
          <WrenchScrewdriverIcon className="w-5 h-5" />
        </ButtonComponent>
        <ButtonComponent onClick={() => handleShow("skillActions")}>
          <BoltIcon className="w-5 h-5" />
        </ButtonComponent>
        <GiftButtonComponent handleShow={handleShow} isShow={show.gift} handleClose={handleClose} />
        <ButtonComponent onClick={() => handleShow("travel")}>
          <ArrowsUpDownIcon className="w-5 h-5" />
        </ButtonComponent>
      </footer>
      {show.market && <MarketComponent onClose={handleClose} />}
      {show.inventory && <InventoryComponent onClose={handleClose} />}
      {show.equipment && <EquipmentComponent onClose={handleClose} />}
      {show.skillActions && <SkillActionSelectComponent onClose={handleClose} />}
      {show.travel && <TravelComponent onClose={handleClose} />}
    </>
  );
};

export default React.memo(Footer);
