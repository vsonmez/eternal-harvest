import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getFibonacciNumber from "../../../utils/get-fibonacci-number.util";
import AppStore from "../..";

namespace BeggingStore {
  type BeggingState = {
    beggingLevel: number;
    beggingXP: number;
    beggingXPToNextLevel: number;
  };

  const initialState: BeggingState = {
    beggingLevel: 0,
    beggingXP: 0,
    beggingXPToNextLevel: getFibonacciNumber(0) * 10,
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
    },
  });

  export const actions = beggingSlice.actions;
  export const reducers = beggingSlice.reducer;

  export const select = {
    getBeggingLevel: (state: AppStore.RootState) => state.persistedReducers.begging.beggingLevel,
    getBeggingXP: (state: AppStore.RootState) => state.persistedReducers.begging.beggingXP,
    getBeggingXPToNextLevel: (state: AppStore.RootState) => state.persistedReducers.begging.beggingXPToNextLevel,
  };
}

export default BeggingStore;
