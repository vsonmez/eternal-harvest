import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getFibonacciNumber from "../../../utils/get-fibonacci-number.util";
import AppStore from "../..";

namespace BlacksmithingStore {
  type BlacksmithingState = {
    blacksmithingLevel: number;
    blacksmithingXP: number;
    blacksmithingXPToNextLevel: number;
    hasAutoBlacksmithing: boolean;
  };

  const initialState: BlacksmithingState = {
    blacksmithingLevel: 0,
    blacksmithingXP: 0,
    blacksmithingXPToNextLevel: getFibonacciNumber(0) * 10,
    hasAutoBlacksmithing: false,
  };

  const blacksmithingSlice = createSlice({
    name: "blacksmithing",
    initialState,
    reducers: {
      increaseBlacksmithingXP(state, action: PayloadAction<number>) {
        state.blacksmithingXP += action.payload;
      },
      increaseBlacksmithingLevel(state) {
        state.blacksmithingLevel += 1;
        state.blacksmithingXPToNextLevel = getFibonacciNumber(state.blacksmithingLevel) * 10;
      },
      setHasAutoBlacksmithing(state, action: PayloadAction<boolean>) {
        state.hasAutoBlacksmithing = action.payload;
      },
    },
  });

  export const actions = blacksmithingSlice.actions;
  export const reducers = blacksmithingSlice.reducer;

  export const select = {
    getblacksmithingLevel: (state: AppStore.RootState) => state.persistedReducers.blacksmithing.blacksmithingLevel,
    getblacksmithingXP: (state: AppStore.RootState) => state.persistedReducers.blacksmithing.blacksmithingXP,
    getblacksmithingXPToNextLevel: (state: AppStore.RootState) => state.persistedReducers.blacksmithing.blacksmithingXPToNextLevel,
    hasAutoBlacksmithing: (state: AppStore.RootState) => state.persistedReducers.blacksmithing.hasAutoBlacksmithing,
  };
}

export default BlacksmithingStore;
