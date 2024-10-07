import React from "react";
import ButtonComponent from "../ui/button.component";
import Item from "../items/models/item.type";
import usePlayerBagStore from "../store/hooks/use-player-bag-store.hook";
import usePlayerGoldStore from "../store/hooks/use-player-gold-store.hook";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import FixedNumberComponent from "../ui/fixed-number.component";
import coinDropBuySound from "../sounds/coin-drop-buy.mp3";
import useSound from "../custom-hooks/use-sound.hook";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import Translation from "../language/transltion";

type Props = {
  item: Item;
};

const BuyButton: React.FC<Props> = ({ item }) => {
  const { play } = useSound({ sound: coinDropBuySound });
  const [amount, setAmount] = React.useState<number>(1);
  const { addToastrMessage } = useToastrStore();
  const { addItemToPlayerBag } = usePlayerBagStore();
  const { playerGold, removeGold } = usePlayerGoldStore();
  const {
    getGlobal: { language },
  } = useGlobalStore();

  const handleIncreaseAmount = React.useCallback(() => {
    setAmount((prev) => prev + 1);
  }, []);

  const handleDecreaseAmount = React.useCallback(() => {
    if (amount > 0) {
      setAmount((prev) => Math.max(prev - 1, 1));
    }
  }, [amount]);

  const handleBuy = React.useCallback(() => {
    if (amount < 1) {
      addToastrMessage({
        type: "error",
        text: "Invalid amount",
      });
      return;
    }
    if (playerGold < item.price * amount) {
      addToastrMessage({
        type: "error",
        text: "Not enough gold",
      });
      return;
    }

    const confirm = window.confirm(`Are you sure you want to buy ${item.name} x${amount} for ${item.price * amount}gp?`);
    if (confirm) {
      play();
      addToastrMessage({
        type: "success",
        text: `Successfully buy ${item.name} x${amount}`,
      });
      removeGold(item.price * amount);
      addItemToPlayerBag({
        ...item,
        amount,
      });
      setAmount(1);
    }
  }, [item, playerGold, addToastrMessage, addItemToPlayerBag, removeGold, amount, play]);

  return (
    <div className="flex gap-2">
      <div className="flex">
        <input disabled className="w-16 bg-black px-1" type="number" value={amount} />
        <ButtonComponent onClick={handleDecreaseAmount}>
          <MinusIcon className="w-3 h-3" />
        </ButtonComponent>
        <ButtonComponent onClick={handleIncreaseAmount}>
          <PlusIcon className="w-3 h-3" />
        </ButtonComponent>
      </div>
      <ButtonComponent className="flex gap-2" onClick={handleBuy}>
        <span>{Translation.translate[language].buy}</span>
        <span>
          (<FixedNumberComponent number={item.price * amount} />
          gp)
        </span>
      </ButtonComponent>
    </div>
  );
};

export default React.memo(BuyButton);
