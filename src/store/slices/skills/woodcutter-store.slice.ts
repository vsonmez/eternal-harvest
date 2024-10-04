import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AppStore from "../..";
import getFibonacciNumber from "../../../utils/get-fibonacci-number.util";

namespace WoodCutterStore {
  type WoodCutterStore = {
    woodcutterLevel: number;
    woodcuttingXP: number;
    woodcuttingXPToNextLevel: number;
    hasAutoWoodcutting: boolean;
  };

  export const initialState: WoodCutterStore = {
    woodcutterLevel: 0,
    woodcuttingXP: 0,
    woodcuttingXPToNextLevel: getFibonacciNumber(0) * 10,
    hasAutoWoodcutting: false,
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
      setAutoWoodcutting(state, action: PayloadAction<boolean>) {
        state.hasAutoWoodcutting = action.payload;
      },
    },
  });

  export const actions = woodCutterSlice.actions;
  export const reducers = woodCutterSlice.reducer;

  export const select = {
    getWoodCutterLevel: (state: AppStore.RootState) => state.persistedReducers.woodcutting.woodcutterLevel,
    getWoodCuttingXP: (state: AppStore.RootState) => state.persistedReducers.woodcutting.woodcuttingXP,
    getWoodCuttingXPToNextLevel: (state: AppStore.RootState) => state.persistedReducers.woodcutting.woodcuttingXPToNextLevel,
    hasAutoWoodcutting: (state: AppStore.RootState) => state.persistedReducers.woodcutting.hasAutoWoodcutting,
  };
}

export default WoodCutterStore;
