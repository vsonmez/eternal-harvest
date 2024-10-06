import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getFibonacciNumber from "../../../utils/get-fibonacci-number.util";
import AppStore from "../..";

namespace CookingStore {
  type CookingState = {
    cookingLevel: number;
    cookingXP: number;
    cookingXPToNextLevel: number;
    hasAutoCooking: boolean;
  };
  const initialState: CookingState = {
    cookingLevel: 0,
    cookingXP: 0,
    cookingXPToNextLevel: getFibonacciNumber(0) * 10,
    hasAutoCooking: false,
  };
  const cookingSlice = createSlice({
    name: "cooking",
    initialState,
    reducers: {
      increaseCookingXP: (state, action: PayloadAction<number>) => {
        state.cookingXP += action.payload;
      },
      increaseCookingLevel: (state) => {
        state.cookingLevel += 1;
        state.cookingXPToNextLevel = getFibonacciNumber(state.cookingLevel) * 10;
      },
      setAutoCooking: (state, action: PayloadAction<boolean>) => {
        state.hasAutoCooking = action.payload;
      },
    },
  });
  export const actions = cookingSlice.actions;
  export const reducers = cookingSlice.reducer;
  export const select = {
    cookingLevel: (state: AppStore.RootState) => state.persistedReducers.cooking.cookingLevel,
    cookingXP: (state: AppStore.RootState) => state.persistedReducers.cooking.cookingXP,
    cookingXPToNextLevel: (state: AppStore.RootState) => state.persistedReducers.cooking.cookingXPToNextLevel,
    hasAutoCooking: (state: AppStore.RootState) => state.persistedReducers.cooking.hasAutoCooking,
  };
}
export default CookingStore;
