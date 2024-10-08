import React from "react";
import usePlayerHungerStore from "../../store/hooks/use-player-hunger-store.hook";
import useMessageStore from "../../store/hooks/use-message-store.hook";
import playerHungerLimit from "../../constants/player-hunger-limit.constant";
import FixedNumberComponent from "../fixed-number.component";
import useGlobalStore from "../../store/hooks/use-global-store.hook";
import Translation from "../../language/transltion";

type Props = {
  showText?: boolean;
};

const HeaderHunger: React.FC<Props> = ({ showText }) => {
  const { playerHungerValue } = usePlayerHungerStore();
  const { addMessage } = useMessageStore();
  const {
    getGlobal: { language },
  } = useGlobalStore();

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
        text: Translation.hungerMessages.hungry[language],
        type: "error",
      });
    }
    if (playerHungerValue <= 30 && playerHungerValue > 29) {
      addMessage({
        text: Translation.hungerMessages.hungrier[language],
        type: "error",
      });
    }
    if (playerHungerValue <= 20 && playerHungerValue > 19) {
      addMessage({
        text: Translation.hungerMessages.hungriest[language],
        type: "error",
      });
    }
    if (playerHungerValue <= 10 && playerHungerValue > 9) {
      addMessage({
        text: Translation.hungerMessages.stomachStarting[language],
        type: "error",
      });
    }
    if (playerHungerValue <= 5) {
      addMessage({
        text: Translation.hungerMessages.starving[language],
        type: "error",
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerHungerValue]);

  return (
    <div className="flex items-center">
      {!showText && <img src="./images/bread.jpeg" alt="" className="w-8 h-8" />}
      {showText && <span className="mr-1">{Translation.translate[language].hunger}:</span>}
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
