import { createSlice } from "@reduxjs/toolkit";
import AppStore from "..";
import giftTime from "../../constants/gift-time.constant";

namespace GiftStore {
  type GiftState = {
    rewardCount: number;
    timeSpent: number;
    timeToNextReward: number;
    rewardLevel: number;
  };

  const initialState: GiftState = {
    rewardCount: 0,
    timeSpent: 0,
    timeToNextReward: 0,
    rewardLevel: 0,
  };

  const giftSlice = createSlice({
    name: "gift",
    initialState,
    reducers: {
      increaseRewardCount: (state) => {
        state.rewardCount += 1;
      },
      decreaseRewardCount: (state) => {
        state.rewardCount = Math.max(0, state.rewardCount - 1);
        state.rewardLevel += 1;
      },
      increaseTimeSpent: (state) => {
        state.timeSpent = state.timeSpent + 1;
        state.timeToNextReward = giftTime - (state.timeSpent % giftTime);
        if (state.timeSpent % giftTime === 0) {
          state.rewardCount = state.rewardCount + 1;
        }
      },
    },
  });

  export const actions = giftSlice.actions;
  export const reducers = giftSlice.reducer;
  export const select = {
    getRewardCount: (state: AppStore.RootState) => state.persistedReducers.gift.rewardCount,
    getTimeSpent: (state: AppStore.RootState) => state.persistedReducers.gift.timeSpent,
    getTimeToNextReward: (state: AppStore.RootState) => state.persistedReducers.gift.timeToNextReward,
    getRewardLevel: (state: AppStore.RootState) => state.persistedReducers.gift.rewardLevel,
  };
}

export default GiftStore;
