import AppStore from "../..";
import BlacksmithingStore from "../../slices/skills/blacksmithing-store.slice";

const useBlacksmithingStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const blacksmithingXP = AppStore.useAppSelector(BlacksmithingStore.select.getblacksmithingXP);
  const blacksmithingXPToNextLevel = AppStore.useAppSelector(BlacksmithingStore.select.getblacksmithingXPToNextLevel);
  const blacksmithingLevel = AppStore.useAppSelector(BlacksmithingStore.select.getblacksmithingLevel);
  const hasAutoBlacksmithing = AppStore.useAppSelector(BlacksmithingStore.select.hasAutoBlacksmithing);

  const increaseBlacksmithingLevel = () => {
    dispatch(BlacksmithingStore.actions.increaseBlacksmithingLevel());
  };
  const increaseBlacksmithingXP = (amount: number) => {
    dispatch(BlacksmithingStore.actions.increaseBlacksmithingXP(amount));
  };
  const setHasAutoBlacksmithing = (value: boolean) => {
    dispatch(BlacksmithingStore.actions.setHasAutoBlacksmithing(value));
  };

  return {
    blacksmithingXP,
    blacksmithingXPToNextLevel,
    blacksmithingLevel,
    hasAutoBlacksmithing,
    increaseBlacksmithingLevel,
    increaseBlacksmithingXP,
    setHasAutoBlacksmithing,
  };
};
export default useBlacksmithingStore;
