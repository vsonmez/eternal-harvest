import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AppStore from "..";

namespace GlobalStore {
  type GlobalState = {
    isBusy: boolean;
    skillActionype: SkillActionTypes;
    language: "tr" | "en";
  };

  export const initialState: GlobalState = {
    isBusy: false,
    skillActionype: undefined,
    language: "en",
  };

  const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
      setIsBusy: (state, action: PayloadAction<boolean>) => ({ ...state, isBusy: action.payload }),
      setSkillActionType: (state, action: PayloadAction<SkillActionTypes>) => ({ ...state, skillActionype: action.payload }),
      setLanguage: (state, action: PayloadAction<"tr" | "en">) => ({ ...state, language: action.payload }),
    },
  });

  export const actions = globalSlice.actions;
  export const reducers = globalSlice.reducer;
  export const select = {
    isBusy: (state: AppStore.RootState) => state.global.isBusy,
    skillActionype: (state: AppStore.RootState) => state.global.skillActionype,
    language: (state: AppStore.RootState) => state.global.language,
  };
}

export default GlobalStore;
