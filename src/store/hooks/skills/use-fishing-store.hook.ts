import AppStore from "../..";
import FishingStore from "../../slices/skills/fishing-store.slice";

const useFishingStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const fishingXP = AppStore.useAppSelector(FishingStore.select.getFishingXP);
  const fishingXPToNextLevel = AppStore.useAppSelector(FishingStore.select.getFishingXPToNextLevel);
  const fishingLevel = AppStore.useAppSelector(FishingStore.select.getFishingLevel);

  const increaseFishingXP = (exp: number) => {
    dispatch(FishingStore.actions.increaseFishingXP(exp));
  };

  const increaseFishingLevel = () => {
    dispatch(FishingStore.actions.increaseFishingLevel());
  };

  return {
    fishingXP,
    fishingXPToNextLevel,
    fishingLevel,
    increaseFishingXP,
    increaseFishingLevel,
  };
};
export default useFishingStore;
