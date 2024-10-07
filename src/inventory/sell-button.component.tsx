import React from "react";
import ButtonComponent from "../ui/button.component";
import usePlayerBagStore from "../store/hooks/use-player-bag-store.hook";
import usePlayerGoldStore from "../store/hooks/use-player-gold-store.hook";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import BagItem from "../items/models/bag-item.type";
import getItemDef from "../utils/get-item-def.util";
import FixedNumberComponent from "../ui/fixed-number.component";
import coinDrooppedSound from "../sounds/coin-dropped.mp3";
import useSound from "../custom-hooks/use-sound.hook";
import useTravelStore from "../store/hooks/use-travel-store.hook";
import travelConstants from "../constants/travel.constants";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import Translation from "../language/transltion";

type Props = {
  item: BagItem;
  disabled?: boolean;
};

const SellButton: React.FC<Props> = ({ item, disabled }) => {
  const {
    getGlobal: { language },
  } = useGlobalStore();
  const { currentLocation } = useTravelStore();
  const { play } = useSound({ sound: coinDrooppedSound });
  const itemDef = React.useMemo(() => getItemDef(item.defName), [item]);
  const { addToastrMessage } = useToastrStore();
  const { removeItemFromPlayerBag } = usePlayerBagStore();
  const { addGold } = usePlayerGoldStore();
  const isDisabled = React.useMemo(() => {
    if (item.isEquipped && item.amount === 1) {
      return true;
    }
    if (item.isLocked && item.amount === 1) {
      return true;
    }
  }, [item]);

  const handleSell = React.useCallback(() => {
    if (currentLocation !== "marketPlace") {
      addToastrMessage({
        type: "warning",
        text: `You can only sell items in the ${travelConstants.travelLocations.marketPlace}.`,
      });
      return;
    }
    play();
    addGold(itemDef.price / 2);
    removeItemFromPlayerBag({
      ...item,
      amount: 1,
    });

    addToastrMessage({
      type: "info",
      text: `Successfully sold ${itemDef.name}`,
    });
  }, [item, addGold, removeItemFromPlayerBag, addToastrMessage, itemDef, play, currentLocation]);

  return (
    <ButtonComponent className="flex gap-2" disabled={disabled || isDisabled} onClick={handleSell}>
      <span>{Translation.translate[language].sell}</span>
      <span>
        (<FixedNumberComponent number={itemDef.price / 2} /> gp)
      </span>
    </ButtonComponent>
  );
};

export default React.memo(SellButton);
