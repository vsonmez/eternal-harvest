import AppStore from "../..";
import FishingStore from "../../slices/skills/fishing-store.slice";

const useFishingStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const fishingXP = AppStore.useAppSelector(FishingStore.select.getFishingXP);
  const fishingXPToNextLevel = AppStore.useAppSelector(FishingStore.select.getFishingXPToNextLevel);
  const fishingLevel = AppStore.useAppSelector(FishingStore.select.getFishingLevel);
  const hasAutoFishing = AppStore.useAppSelector(FishingStore.select.hasAutoFishing);

  const increaseFishingXP = (exp: number) => {
    dispatch(FishingStore.actions.increaseFishingXP(exp));
  };

  const increaseFishingLevel = () => {
    dispatch(FishingStore.actions.increaseFishingLevel());
  };

  const setAutoFishing = (value: boolean) => {
    dispatch(FishingStore.actions.setAutoFishing(value));
  };

  return {
    fishingXP,
    fishingXPToNextLevel,
    fishingLevel,
    hasAutoFishing,
    increaseFishingXP,
    increaseFishingLevel,
    setAutoFishing,
  };
};
export default useFishingStore;
