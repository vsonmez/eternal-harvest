import AppStore from "..";
import ToastrStore from "../slices/toastr-store.slice";

const useToastrStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const toastrList = AppStore.useAppSelector(ToastrStore.select.getToastrList);

  const addToastrMessage = (message: Message) => {
    dispatch(ToastrStore.actions.addMessage(message));
  };

  const removeToastrMessage = (id: string) => {
    dispatch(ToastrStore.actions.removeMessage(id));
  };

  const resetToastrList = () => {
    dispatch(ToastrStore.actions.resetToastrList());
  };

  return {
    toastrList,
    addToastrMessage,
    removeToastrMessage,
    resetToastrList,
  };
};

export default useToastrStore;
