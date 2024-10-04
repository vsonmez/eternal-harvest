import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getFibonacciNumber from "../../../utils/get-fibonacci-number.util";
import AppStore from "../..";

namespace FishingStore {
  type FishingState = {
    fishingLevel: number;
    fishingXP: number;
    fishingXPToNextLevel: number;
  };
  const initialState: FishingState = {
    fishingLevel: 0,
    fishingXP: 0,
    fishingXPToNextLevel: getFibonacciNumber(0) * 10,
  };
  const fishingSlice = createSlice({
    name: "fishing",
    initialState,
    reducers: {
      increaseFishingXP: (state, action: PayloadAction<number>) => {
        state.fishingXP += action.payload;
      },
      increaseFishingLevel: (state) => {
        state.fishingLevel += 1;
        state.fishingXPToNextLevel = getFibonacciNumber(state.fishingLevel) * 10;
      },
    },
  });
  export const actions = fishingSlice.actions;
  export const reducers = fishingSlice.reducer;
  export const select = {
    getFishingLevel: (state: AppStore.RootState) => state.persistedReducers.fishing.fishingLevel,
    getFishingXP: (state: AppStore.RootState) => state.persistedReducers.fishing.fishingXP,
    getFishingXPToNextLevel: (state: AppStore.RootState) => state.persistedReducers.fishing.fishingXPToNextLevel,
  };
}
export default FishingStore;
