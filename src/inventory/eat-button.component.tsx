import React from "react";
import ButtonComponent from "../ui/button.component";
import usePlayerHungerStore from "../store/hooks/use-player-hunger-store.hook";
import usePlayerBagStore from "../store/hooks/use-player-bag-store.hook";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import playerHungerLimit from "../constants/player-hunger-limit.constant";
import BagItem from "../items/models/bag-item.type";
import getItemDef from "../utils/get-item-def.util";
import sound from "../sounds/eating.mp3";
import useSound from "../custom-hooks/use-sound.hook";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import Translation from "../language/transltion";

type Props = {
  item: BagItem;
};

const EatButton: React.FC<Props> = ({ item }) => {
  const {
    getGlobal: { language },
  } = useGlobalStore();
  const { play } = useSound({ sound });
  const itemDef = React.useMemo(() => getItemDef(item.defName), [item]);
  const { removeItemFromPlayerBag } = usePlayerBagStore();
  const { increaseHungerValue, playerHungerValue } = usePlayerHungerStore();
  const { addToastrMessage } = useToastrStore();

  const handleEat = React.useCallback(() => {
    if (itemDef.hungerRestore) {
      if (playerHungerValue >= playerHungerLimit) {
        addToastrMessage({
          type: "warning",
          text: "You are already full",
        });
        return;
      }
      play();
      increaseHungerValue(itemDef.hungerRestore);
      removeItemFromPlayerBag({
        ...item,
        amount: 1,
      });

      addToastrMessage({
        type: "info",
        text: `You ate ${itemDef.name}`,
      });
    }
  }, [item, removeItemFromPlayerBag, increaseHungerValue, playerHungerValue, addToastrMessage, itemDef, play]);

  return <ButtonComponent onClick={handleEat}>{Translation.translate[language].eat}</ButtonComponent>;
};

export default React.memo(EatButton);
