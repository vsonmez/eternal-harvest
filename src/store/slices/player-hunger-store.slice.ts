import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AppStore from "..";

namespace PlayerHungerStore {
  type State = {
    hungerValue: number;
    hungerIncreasing: boolean;
    hungerDecreasing: boolean;
  };

  const initialState: State = {
    hungerValue: 100,
    hungerIncreasing: false,
    hungerDecreasing: false,
  };

  const playerHungerSlice = createSlice({
    name: "playerHunger",
    initialState,
    reducers: {
      increaseHungerValue: (state, action: PayloadAction<number>) => {
        const value = state.hungerValue + action.payload;
        state.hungerValue = Math.min(100, value);
        state.hungerIncreasing = true;
        state.hungerDecreasing = false;
      },
      decreaseHungerValue: (state, action: PayloadAction<number>) => {
        const value = state.hungerValue - action.payload;
        state.hungerValue = Math.max(0, value);
        state.hungerDecreasing = true;
        state.hungerIncreasing = false;
      },
    },
  });

  export const actions = playerHungerSlice.actions;
  export const reducers = playerHungerSlice.reducer;
  export const select = {
    hungerValue: (state: AppStore.RootState) => state.persistedReducers.playerHunger.hungerValue,
    increasing: (state: AppStore.RootState) => state.persistedReducers.playerHunger.hungerIncreasing,
    decreasing: (state: AppStore.RootState) => state.persistedReducers.playerHunger.hungerDecreasing,
  };
}

export default PlayerHungerStore;
