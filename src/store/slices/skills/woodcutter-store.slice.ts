import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AppStore from "../..";
import getFibonacciNumber from "../../../utils/get-fibonacci-number.util";

namespace WoodCutterStore {
  type WoodCutterStore = {
    woodcutterLevel: number;
    woodcuttingXP: number;
    woodcuttingXPToNextLevel: number;
  };

  export const initialState: WoodCutterStore = {
    woodcutterLevel: 0,
    woodcuttingXP: 0,
    woodcuttingXPToNextLevel: getFibonacciNumber(0) * 10,
  };

  const woodCutterSlice = createSlice({
    name: "woodCutter",
    initialState,
    reducers: {
      increaseWoodCuttingXP(state, action: PayloadAction<number>) {
        state.woodcuttingXP += action.payload;
      },
      increaseWoodCuttingLevel(state) {
        state.woodcutterLevel += 1;
        state.woodcuttingXPToNextLevel = getFibonacciNumber(state.woodcutterLevel) * 10;
      },
    },
  });

  export const actions = woodCutterSlice.actions;
  export const reducers = woodCutterSlice.reducer;

  export const select = {
    getWoodCutterLevel: (state: AppStore.RootState) => state.persistedReducers.woodcutting.woodcutterLevel,
    getWoodCuttingXP: (state: AppStore.RootState) => state.persistedReducers.woodcutting.woodcuttingXP,
    getWoodCuttingXPToNextLevel: (state: AppStore.RootState) => state.persistedReducers.woodcutting.woodcuttingXPToNextLevel,
  };
}

export default WoodCutterStore;
