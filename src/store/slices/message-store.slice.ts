import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getUUID from "../../utils/get-uuid.util";
import AppStore from "..";
import getHoursAndMinutes from "../../utils/get-hours-and-minutes.util";

namespace MessageStore {
  type MessageState = {
    messages: Message[];
  };

  export const initialState: MessageState = {
    messages: [],
  };

  const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
      addMessage: (state, action: PayloadAction<Message>) => {
        const message = action.payload;
        message.id = getUUID();
        message.timeStamp = getHoursAndMinutes();
        state.messages.unshift(action.payload);
      },
      resetMessages: (state) => {
        state.messages = [];
      },
    },
  });

  export const actions = messageSlice.actions;
  export const reducers = messageSlice.reducer;
  export const select = {
    messages: (state: AppStore.RootState) => state.message.messages,
  };
}

export default MessageStore;
