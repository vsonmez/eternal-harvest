import AppStore from "../..";
import DeceptionStore from "../../slices/skills/deception-store.slice";

const useDeceptionStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const deceptionLevel = AppStore.useAppSelector(DeceptionStore.select.deceptionLevel);
  const deceptionXP = AppStore.useAppSelector(DeceptionStore.select.deceptionXP);
  const deceptionXPToNextLevel = AppStore.useAppSelector(DeceptionStore.select.deceptionXPToNextLevel);

  const increaseDeceptionLevel = () => {
    dispatch(DeceptionStore.actions.increaseDeceptionLevel());
  };

  const increaseDeceptionXP = (amount: number) => {
    dispatch(DeceptionStore.actions.increaseDeceptionXP(amount));
  };

  return {
    deceptionLevel,
    deceptionXP,
    deceptionXPToNextLevel,
    increaseDeceptionLevel,
    increaseDeceptionXP,
  };
};

export default useDeceptionStore;
