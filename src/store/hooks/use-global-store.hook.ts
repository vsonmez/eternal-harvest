import AppStore from "..";
import GlobalStore from "../slices/global-store.slice";

const useGlobalStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const getGlobal = {
    isBusy: AppStore.useAppSelector(GlobalStore.select.isBusy),
    skillActionype: AppStore.useAppSelector(GlobalStore.select.skillActionype),
  };

  const setIsBusy = (isBusy: boolean) => {
    dispatch(GlobalStore.actions.setIsBusy(isBusy));
  };

  const setSkillActionType = (skillActionype: SkillActionTypes) => {
    dispatch(GlobalStore.actions.setSkillActionType(skillActionype));
  };
  return {
    getGlobal,
    setIsBusy,
    setSkillActionType,
  };
};
export default useGlobalStore;
