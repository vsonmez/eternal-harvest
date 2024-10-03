import React from "react";
import usePlayerGoldStore from "../../store/hooks/use-player-gold-store.hook";
import GoldViewComponent from "../gold-view.component";

const HeaderGold = () => {
  const { playerGold } = usePlayerGoldStore();
  return (
    <div className="flex items-center">
      <img src="./images/coin.jpeg" alt="" className="w-8 h-8" />
      <strong>
        <GoldViewComponent goldAmount={playerGold} />
      </strong>
    </div>
  );
};

export default React.memo(HeaderGold);
