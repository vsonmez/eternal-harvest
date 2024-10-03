import AppStore from "..";
import PlayerHungerStore from "../slices/player-hunger-store.slice";

const usePlayerHungerStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const playerHungerValue = AppStore.useAppSelector(PlayerHungerStore.select.hungerValue);
  const hungerIncreasing = AppStore.useAppSelector(PlayerHungerStore.select.increasing);
  const hungerDecreasing = AppStore.useAppSelector(PlayerHungerStore.select.decreasing);
  const increaseHungerValue = (hungerValue: number) => {
    dispatch(PlayerHungerStore.actions.increaseHungerValue(hungerValue));
  };

  const decreaseHungerValue = (hungerValue: number) => {
    dispatch(PlayerHungerStore.actions.decreaseHungerValue(hungerValue));
  };
  return {
    playerHungerValue,
    hungerIncreasing,
    hungerDecreasing,
    increaseHungerValue,
    decreaseHungerValue,
  };
};
export default usePlayerHungerStore;
