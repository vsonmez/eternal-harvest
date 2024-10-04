import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getFibonacciNumber from "../../../utils/get-fibonacci-number.util";
import AppStore from "../..";

namespace BeggingStore {
  type BeggingState = {
    beggingLevel: number;
    beggingXP: number;
    beggingXPToNextLevel: number;
    hasAutoBegging: boolean;
  };

  const initialState: BeggingState = {
    beggingLevel: 0,
    beggingXP: 0,
    beggingXPToNextLevel: getFibonacciNumber(0) * 10,
    hasAutoBegging: false,
  };

  const beggingSlice = createSlice({
    name: "begging",
    initialState,
    reducers: {
      increaseBeggingXP(state, action: PayloadAction<number>) {
        state.beggingXP += action.payload;
      },
      increaseBeggingLevel(state) {
        state.beggingLevel += 1;
        state.beggingXPToNextLevel = getFibonacciNumber(state.beggingLevel) * 10;
      },
      setHasAutoBegging(state, action: PayloadAction<boolean>) {
        state.hasAutoBegging = action.payload;
      },
    },
  });

  export const actions = beggingSlice.actions;
  export const reducers = beggingSlice.reducer;

  export const select = {
    getBeggingLevel: (state: AppStore.RootState) => state.persistedReducers.begging.beggingLevel,
    getBeggingXP: (state: AppStore.RootState) => state.persistedReducers.begging.beggingXP,
    getBeggingXPToNextLevel: (state: AppStore.RootState) => state.persistedReducers.begging.beggingXPToNextLevel,
    hasAutoBegging: (state: AppStore.RootState) => state.persistedReducers.begging.hasAutoBegging,
  };
}

export default BeggingStore;
