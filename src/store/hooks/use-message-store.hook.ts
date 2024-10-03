import AppStore from "..";
import MessageStore from "../slices/message-store.slice";

const useMessageStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const messageList = AppStore.useAppSelector(MessageStore.select.messages);
  const addMessage = (message: Message) => {
    dispatch(MessageStore.actions.addMessage(message));
  };

  const resetMessageList = () => {
    dispatch(MessageStore.actions.resetMessages());
  };

  return {
    messageList,
    addMessage,
    resetMessageList,
  };
};

export default useMessageStore;
