import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AppStore from "..";
import BagItem from "../../items/models/bag-item.type";

namespace PlayerEquipmentStore {
  type PlayerEquipmentState = {
    hand: BagItem | null;
    head: BagItem | null;
    body: BagItem | null;
    feet: BagItem | null;
    handLeft: BagItem | null;
    legs: BagItem | null;
  };

  const initialState: PlayerEquipmentState = {
    hand: null,
    head: null,
    body: null,
    feet: null,
    handLeft: null,
    legs: null,
  };

  const playerEquipmentSlice = createSlice({
    name: "playerEquipment",
    initialState,
    reducers: {
      setHand: (state, action: PayloadAction<BagItem | null>) => {
        state.hand = action.payload;
      },
      setHead: (state, action: PayloadAction<BagItem | null>) => {
        state.head = action.payload;
      },
      setBody: (state, action: PayloadAction<BagItem | null>) => {
        state.body = action.payload;
      },
      setFeet: (state, action: PayloadAction<BagItem | null>) => {
        state.feet = action.payload;
      },
      setHandLeft: (state, action: PayloadAction<BagItem | null>) => {
        state.handLeft = action.payload;
      },
      setLegs: (state, action: PayloadAction<BagItem | null>) => {
        state.legs = action.payload;
      },
    },
  });

  export const actions = playerEquipmentSlice.actions;
  export const reducers = playerEquipmentSlice.reducer;
  export const select = {
    getHand: (state: AppStore.RootState) => state.persistedReducers.playerEquipment.hand,
    getHead: (state: AppStore.RootState) => state.persistedReducers.playerEquipment.head,
    getBody: (state: AppStore.RootState) => state.persistedReducers.playerEquipment.body,
    getFeet: (state: AppStore.RootState) => state.persistedReducers.playerEquipment.feet,
    getHandLeft: (state: AppStore.RootState) => state.persistedReducers.playerEquipment.handLeft,
    getLegs: (state: AppStore.RootState) => state.persistedReducers.playerEquipment.legs,
  };
}

export default PlayerEquipmentStore;
