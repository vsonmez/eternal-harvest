import AppStore from "../..";
import BeggingStore from "../../slices/skills/begging-store.slice";

const useBeggingStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const beggingLevel = AppStore.useAppSelector(BeggingStore.select.getBeggingLevel);
  const beggingXP = AppStore.useAppSelector(BeggingStore.select.getBeggingXP);
  const beggingXPToNextLevel = AppStore.useAppSelector(BeggingStore.select.getBeggingXPToNextLevel);

  const increaseBeggingLevel = () => {
    dispatch(BeggingStore.actions.increaseBeggingLevel());
  };

  const increaseBeggingXP = (amount: number) => {
    dispatch(BeggingStore.actions.increaseBeggingXP(amount));
  };

  return {
    beggingLevel,
    beggingXP,
    beggingXPToNextLevel,
    increaseBeggingLevel,
    increaseBeggingXP,
  };
};

export default useBeggingStore;
