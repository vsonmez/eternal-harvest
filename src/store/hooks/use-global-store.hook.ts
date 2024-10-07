import AppStore from "..";
import GlobalStore from "../slices/global-store.slice";

const useGlobalStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const getGlobal = {
    isBusy: AppStore.useAppSelector(GlobalStore.select.isBusy),
    skillActionype: AppStore.useAppSelector(GlobalStore.select.skillActionype),
    language: AppStore.useAppSelector(GlobalStore.select.language),
  };

  const setIsBusy = (isBusy: boolean) => {
    dispatch(GlobalStore.actions.setIsBusy(isBusy));
  };

  const setSkillActionType = (skillActionype: SkillActionTypes) => {
    dispatch(GlobalStore.actions.setSkillActionType(skillActionype));
  };

  const setLanguage = (language: "en" | "tr") => {
    dispatch(GlobalStore.actions.setLanguage(language));
  };

  return {
    getGlobal,
    setLanguage,
    setIsBusy,
    setSkillActionType,
  };
};
export default useGlobalStore;
