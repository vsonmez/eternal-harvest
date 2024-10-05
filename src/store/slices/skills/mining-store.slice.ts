import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getFibonacciNumber from "../../../utils/get-fibonacci-number.util";
import AppStore from "../..";

namespace MiningStore {
  type MiningState = {
    miningLevel: number;
    miningXP: number;
    miningXPToNextLevel: number;
    hasAutoMining: boolean;
  };
  const initialState: MiningState = {
    miningLevel: 0,
    miningXP: 0,
    miningXPToNextLevel: getFibonacciNumber(0) * 10,
    hasAutoMining: false,
  };
  const miningSlice = createSlice({
    name: "mining",
    initialState,
    reducers: {
      increaseMiningXP: (state, action: PayloadAction<number>) => {
        state.miningXP += action.payload;
      },
      increaseMiningLevel: (state) => {
        state.miningLevel += 1;
        state.miningXPToNextLevel = getFibonacciNumber(state.miningLevel) * 10;
      },
      setHasAutoMining: (state, action: PayloadAction<boolean>) => {
        state.hasAutoMining = action.payload;
      },
    },
  });
  export const actions = miningSlice.actions;
  export const reducers = miningSlice.reducer;
  export const select = {
    getMiningLevel: (state: AppStore.RootState) => state.persistedReducers.mining.miningLevel,
    getMiningXP: (state: AppStore.RootState) => state.persistedReducers.mining.miningXP,
    getMiningXPToNextLevel: (state: AppStore.RootState) => state.persistedReducers.mining.miningXPToNextLevel,
    getHasAutoMining: (state: AppStore.RootState) => state.persistedReducers.mining.hasAutoMining,
  };
}
export default MiningStore;
