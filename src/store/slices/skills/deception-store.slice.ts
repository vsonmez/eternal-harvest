import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getFibonacciNumber from "../../../utils/get-fibonacci-number.util";
import AppStore from "../..";

namespace DeceptionStore {
  type DeceptionState = {
    deceptionLevel: number;
    deceptionXP: number;
    deceptionXPToNextLevel: number;
  };

  const initialState: DeceptionState = {
    deceptionLevel: 0,
    deceptionXP: 0,
    deceptionXPToNextLevel: getFibonacciNumber(0) * 10,
  };

  const deceptionSlice = createSlice({
    name: "deception",
    initialState,
    reducers: {
      increaseDeceptionXP(state, action: PayloadAction<number>) {
        state.deceptionXP += action.payload;
      },
      increaseDeceptionLevel(state) {
        state.deceptionLevel += 1;
        state.deceptionXPToNextLevel = getFibonacciNumber(state.deceptionLevel) * 10;
      },
    },
  });

  export const actions = deceptionSlice.actions;
  export const reducers = deceptionSlice.reducer;
  export const select = {
    deceptionLevel: (state: AppStore.RootState) => state.persistedReducers.deception.deceptionLevel,
    deceptionXP: (state: AppStore.RootState) => state.persistedReducers.deception.deceptionXP,
    deceptionXPToNextLevel: (state: AppStore.RootState) => state.persistedReducers.deception.deceptionXPToNextLevel,
  };
}

export default DeceptionStore;
