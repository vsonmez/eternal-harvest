import AppStore from "../..";
import CarpentryStore from "../../slices/skills/carpentry-store.slice";

const useCarpentryStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const carpentryXP = AppStore.useAppSelector(CarpentryStore.select.selectCarpentryXP);
  const carpentryXPToNextLevel = AppStore.useAppSelector(CarpentryStore.select.selectCarpentryXPToNextLevel);
  const carpentryLevel = AppStore.useAppSelector(CarpentryStore.select.selectCarpentryLevel);
  const hasAutoCarpentry = AppStore.useAppSelector(CarpentryStore.select.selectHasAutoCarpentry);

  const increaseCarpentryLevel = () => {
    dispatch(CarpentryStore.actions.increaseCarpentryLevel());
  };

  const increaseCarpentryXP = (amount: number) => {
    dispatch(CarpentryStore.actions.increaseCarpentryXP(amount));
  };

  const setAutoCarpentry = (value: boolean) => {
    dispatch(CarpentryStore.actions.setAutoCarpentry(value));
  };

  return {
    carpentryXP,
    carpentryXPToNextLevel,
    carpentryLevel,
    hasAutoCarpentry,
    increaseCarpentryLevel,
    increaseCarpentryXP,
    setAutoCarpentry,
  };
};
export default useCarpentryStore;
