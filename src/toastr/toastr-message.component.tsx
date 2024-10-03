import React from "react";
import ButtonComponent from "../ui/button.component";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import getCssClassNameByMessageType from "../utils/get-css-class-name-by-message-type.util";
import toastrMessageTime from "../constants/toastr-message-time.constant";

type Props = {
  message: Message;
};

const ToastrMessage: React.FC<Props> = ({ message }) => {
  const { removeToastrMessage } = useToastrStore();

  const handleClose = React.useCallback(() => {
    removeToastrMessage(message.id!);
  }, [message, removeToastrMessage]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      removeToastrMessage(message.id!);
    }, toastrMessageTime);
    return () => {
      clearTimeout(timer);
    };
  }, [message, removeToastrMessage]);

  return (
    <div className={`flex items-center justify-between gap-2 bg-black p-3 m-2 text-white border border-gray-700 ${getCssClassNameByMessageType(message.type)}`}>
      <span>{message.text}</span>
      <ButtonComponent className="border-rose-700 text-rose-500" onClick={handleClose}>
        <XMarkIcon className="w-3 h-3" />
      </ButtonComponent>
    </div>
  );
};

export default React.memo(ToastrMessage);
