import React from "react";
import usePlayerHungerStore from "../../store/hooks/use-player-hunger-store.hook";
import useMessageStore from "../../store/hooks/use-message-store.hook";
import playerHungerLimit from "../../constants/player-hunger-limit.constant";
import FixedNumberComponent from "../fixed-number.component";

type Props = {
  showText?: boolean;
};

const HeaderHunger: React.FC<Props> = ({ showText }) => {
  const { playerHungerValue } = usePlayerHungerStore();
  const { addMessage } = useMessageStore();

  const cssClassByHungerValue = () => {
    if (playerHungerValue <= 50 && playerHungerValue > 30) {
      return "text-yellow-500";
    }
    if (playerHungerValue <= 30 && playerHungerValue > 20) {
      return "text-yellow-600";
    }
    if (playerHungerValue <= 20 && playerHungerValue > 10) {
      return "text-orange-500";
    }
    if (playerHungerValue <= 10 && playerHungerValue > 5) {
      return "text-orange-700";
    }
    if (playerHungerValue <= 5) {
      return "text-rose-500";
    }
  };

  React.useEffect(() => {
    if (playerHungerValue <= 50 && playerHungerValue > 49) {
      addMessage({
        text: "You are starting to get HUNGRY!",
        type: "error",
      });
    }
    if (playerHungerValue <= 30 && playerHungerValue > 29) {
      addMessage({
        text: "You are starting to get HUNGRIER!",
        type: "error",
      });
    }
    if (playerHungerValue <= 20 && playerHungerValue > 19) {
      addMessage({
        text: "You are starting to get HUNGRIEST!",
        type: "error",
      });
    }
    if (playerHungerValue <= 10 && playerHungerValue > 9) {
      addMessage({
        text: "Your stomach is starting to hurt from hunger!",
        type: "error",
      });
    }
    if (playerHungerValue <= 5) {
      addMessage({
        text: "YOU ARE STARVING!",
        type: "error",
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerHungerValue]);

  return (
    <div className="flex items-center">
      {!showText && <img src="/images/bread.jpeg" alt="" className="w-8 h-8" />}
      {showText && <span className="mr-1">Hunger:</span>}
      <strong>
        <span className={cssClassByHungerValue()}>
          <FixedNumberComponent number={playerHungerValue} />
        </span>
        /{playerHungerLimit}
      </strong>
    </div>
  );
};

export default React.memo(HeaderHunger);
