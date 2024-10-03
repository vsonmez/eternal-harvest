import AppStore from "..";
import GiftStore from "../slices/gift-store.slice";

const useGiftStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const rewardCount = AppStore.useAppSelector(GiftStore.select.getRewardCount);
  const timeSpent = AppStore.useAppSelector(GiftStore.select.getTimeSpent);
  const timeToNextReward = AppStore.useAppSelector(GiftStore.select.getTimeToNextReward);
  const rewardLevel = AppStore.useAppSelector(GiftStore.select.getRewardLevel);

  const increaseRewardCount = () => {
    dispatch(GiftStore.actions.increaseRewardCount());
  };
  const decreaseRewardCount = () => {
    dispatch(GiftStore.actions.decreaseRewardCount());
  };

  const setTimeSpent = () => {
    dispatch(GiftStore.actions.increaseTimeSpent());
  };

  return {
    rewardCount,
    timeSpent,
    timeToNextReward,
    rewardLevel,
    increaseRewardCount,
    decreaseRewardCount,
    setTimeSpent,
  };
};

export default useGiftStore;
