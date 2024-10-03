import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AppStore from "..";
import getUUID from "../../utils/get-uuid.util";

namespace ToastrStore {
  type ToastrState = {
    toastrList: Message[];
  };

  export const initialState: ToastrState = {
    toastrList: [],
  };

  export const toastrSlice = createSlice({
    name: "toastr",
    initialState,
    reducers: {
      addMessage: (state, action: PayloadAction<Message>) => {
        const message = action.payload;
        message.id = getUUID();
        state.toastrList = [...state.toastrList, message];
        if (state.toastrList.length > 3) {
          state.toastrList.shift();
        }
      },

      removeMessage: (state, action: PayloadAction<string>) => {
        state.toastrList = state.toastrList.filter((message) => message.id !== action.payload);
      },
      resetToastrList: () => initialState,
    },
  });

  export const actions = toastrSlice.actions;
  export const reducers = toastrSlice.reducer;
  export const select = {
    getToastrList: (state: AppStore.RootState) => state.toastr.toastrList,
  };
}

export default ToastrStore;
