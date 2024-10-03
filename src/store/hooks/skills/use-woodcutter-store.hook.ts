import AppStore from "../..";
import WoodCutterStore from "../../slices/skills/woodcutter-store.slice";

const useWoodcutterStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const woodcutterLevel = AppStore.useAppSelector(WoodCutterStore.select.getWoodCutterLevel);
  const woodcuttingXP = AppStore.useAppSelector(WoodCutterStore.select.getWoodCuttingXP);
  const woodcuttingXPToNextLevel = AppStore.useAppSelector(WoodCutterStore.select.getWoodCuttingXPToNextLevel);

  const increaseWoodCuttingXP = (exp: number) => {
    dispatch(WoodCutterStore.actions.increaseWoodCuttingXP(exp));
  };

  const increaseWoodCuttingLevel = () => {
    dispatch(WoodCutterStore.actions.increaseWoodCuttingLevel());
  };

  return {
    woodcutterLevel,
    woodcuttingXP,
    woodcuttingXPToNextLevel,
    increaseWoodCuttingXP,
    increaseWoodCuttingLevel,
  };
};

export default useWoodcutterStore;
