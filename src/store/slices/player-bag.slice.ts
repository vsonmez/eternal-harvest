import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AppStore from "..";
import BagItem from "../../items/models/bag-item.type";

namespace PlayerBagStore {
  type PlayerBagState = {
    [key: string]: BagItem;
  };
  export const initialState: PlayerBagState = {
    fryingPan: {
      amount: 1,
      bonuses: {
        countdownTime: 0,
        itemAmount: 0,
        itemChance: 0,
      },
      defName: "fryingPan",
      equipSlot: "hand",
      isCookable: false,
      isEquipped: false,
      isLocked: false,
      itemType: "tool",
      name: "Frying Pan",
      processedItem: "",
    },
    rawFish: {
      amount: 1000,
      bonuses: {
        countdownTime: 0,
        itemAmount: 0,
        itemChance: 0,
      },
      defName: "rawFish",
      equipSlot: undefined,
      isCookable: true,
      isEquipped: false,
      isLocked: false,
      itemType: "rawMaterial",
      name: "Raw Fish",
      processedItem: "bakedFish",
    },
  };

  const playerBagSlice = createSlice({
    name: "playerBag",
    initialState,
    reducers: {
      addItemToPlayerBag: (state, action: PayloadAction<BagItem>) => {
        if (!state[action.payload.defName]) {
          state[action.payload.defName] = {
            ...action.payload,
          };
        } else {
          state[action.payload.defName].amount += action.payload.amount;
        }
      },
      removeItemFromPlayerBag: (state, action: PayloadAction<BagItem>) => {
        state[action.payload.defName].amount -= action.payload.amount;
        if (state[action.payload.defName].amount <= 0) {
          delete state[action.payload.defName];
        }
      },
      lockItem: (state, action: PayloadAction<BagItem>) => {
        state[action.payload.defName].isLocked = true;
      },
      unlockItem: (state, action: PayloadAction<BagItem>) => {
        state[action.payload.defName].isLocked = false;
      },
      setItemEquipped: (state, action: PayloadAction<BagItem>) => {
        state[action.payload.defName].isEquipped = true;
      },
      setItemUnequipped: (state, action: PayloadAction<BagItem>) => {
        state[action.payload.defName].isEquipped = false;
      },
    },
  });

  export const actions = playerBagSlice.actions;
  export const reducers = playerBagSlice.reducer;
  export const select = {
    getPlayerBag: (state: AppStore.RootState) => state.persistedReducers.playerBag,
  };
}

export default PlayerBagStore;
