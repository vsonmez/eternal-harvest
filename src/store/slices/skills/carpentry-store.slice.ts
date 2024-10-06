import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getFibonacciNumber from "../../../utils/get-fibonacci-number.util";
import AppStore from "../..";

namespace CarpentryStore {
  type CarpentryState = {
    carpentryLevel: number;
    carpentryXP: number;
    carpentryXPToNextLevel: number;
    hasAutoCarpentry: boolean;
  };
  const initialState: CarpentryState = {
    carpentryLevel: 0,
    carpentryXP: 0,
    carpentryXPToNextLevel: getFibonacciNumber(0) * 10,
    hasAutoCarpentry: false,
  };
  const carpentrySlice = createSlice({
    name: "carpentry",
    initialState,
    reducers: {
      increaseCarpentryXP: (state, action: PayloadAction<number>) => {
        state.carpentryXP += action.payload;
      },
      increaseCarpentryLevel: (state) => {
        state.carpentryLevel += 1;
        state.carpentryXPToNextLevel = getFibonacciNumber(state.carpentryLevel) * 10;
      },
      setAutoCarpentry: (state, action: PayloadAction<boolean>) => {
        state.hasAutoCarpentry = action.payload;
      },
    },
  });
  export const actions = carpentrySlice.actions;
  export const reducers = carpentrySlice.reducer;
  export const select = {
    selectCarpentryLevel: (state: AppStore.RootState) => state.persistedReducers.carpentry.carpentryLevel,
    selectCarpentryXP: (state: AppStore.RootState) => state.persistedReducers.carpentry.carpentryXP,
    selectCarpentryXPToNextLevel: (state: AppStore.RootState) => state.persistedReducers.carpentry.carpentryXPToNextLevel,
    selectHasAutoCarpentry: (state: AppStore.RootState) => state.persistedReducers.carpentry.hasAutoCarpentry,
  };
}
export default CarpentryStore;
