import AppStore from "../..";
import MiningStore from "../../slices/skills/mining-store.slice";

const useMiningStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const miningLevel = AppStore.useAppSelector(MiningStore.select.getMiningLevel);
  const miningXP = AppStore.useAppSelector(MiningStore.select.getMiningXP);
  const miningXPToNextLevel = AppStore.useAppSelector(MiningStore.select.getMiningXPToNextLevel);
  const hasAutoMining = AppStore.useAppSelector(MiningStore.select.getHasAutoMining);

  const increaseMiningLevel = () => {
    dispatch(MiningStore.actions.increaseMiningLevel());
  };
  const increaseMiningXP = (amount: number) => {
    dispatch(MiningStore.actions.increaseMiningXP(amount));
  };

  const setHasAutoMining = (hasAutoMining: boolean) => {
    dispatch(MiningStore.actions.setHasAutoMining(hasAutoMining));
  };

  return {
    miningLevel,
    miningXP,
    miningXPToNextLevel,
    increaseMiningLevel,
    increaseMiningXP,
    setHasAutoMining,
    hasAutoMining,
  };
};
export default useMiningStore;
