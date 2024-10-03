import AppStore from "..";
import PlayerGoldStore from "../slices/player-gold.slice";

const usePlayerGoldStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const playerGold = AppStore.useAppSelector(PlayerGoldStore.select.getPlayerGold);
  const addGold = (amount: number) => {
    dispatch(PlayerGoldStore.actions.addGold(amount));
  };

  const removeGold = (amount: number) => {
    dispatch(PlayerGoldStore.actions.removeGold(amount));
  };

  return {
    playerGold,
    addGold,
    removeGold,
  };
};

export default usePlayerGoldStore;
