import AppStore from "../..";
import BeggingStore from "../../slices/skills/begging-store.slice";

const useBeggingStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const beggingLevel = AppStore.useAppSelector(BeggingStore.select.getBeggingLevel);
  const beggingXP = AppStore.useAppSelector(BeggingStore.select.getBeggingXP);
  const beggingXPToNextLevel = AppStore.useAppSelector(BeggingStore.select.getBeggingXPToNextLevel);
  const hasAutoBegging = AppStore.useAppSelector(BeggingStore.select.hasAutoBegging);

  const increaseBeggingLevel = () => {
    dispatch(BeggingStore.actions.increaseBeggingLevel());
  };

  const increaseBeggingXP = (amount: number) => {
    dispatch(BeggingStore.actions.increaseBeggingXP(amount));
  };

  const setHasAutoBegging = (hasAutoBegging: boolean) => {
    dispatch(BeggingStore.actions.setHasAutoBegging(hasAutoBegging));
  };

  return {
    beggingLevel,
    beggingXP,
    beggingXPToNextLevel,
    increaseBeggingLevel,
    increaseBeggingXP,
    setHasAutoBegging,
    hasAutoBegging,
  };
};

export default useBeggingStore;
