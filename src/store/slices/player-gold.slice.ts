import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AppStore from "..";

namespace PlayerGoldStore {
  type PlayerGoldState = {
    gold: number;
  };

  export const initialState: PlayerGoldState = {
    gold: 20,
  };

  export const playerGoldSlice = createSlice({
    name: "playerGold",
    initialState,
    reducers: {
      addGold: (state, action: PayloadAction<number>) => {
        state.gold += action.payload;
      },
      removeGold: (state, action: PayloadAction<number>) => {
        state.gold = Math.max(0, state.gold - action.payload);
      },
    },
  });

  export const actions = playerGoldSlice.actions;
  export const reducers = playerGoldSlice.reducer;
  export const select = {
    getPlayerGold: (state: AppStore.RootState) => state.persistedReducers.playerGold.gold,
  };
}

export default PlayerGoldStore;
