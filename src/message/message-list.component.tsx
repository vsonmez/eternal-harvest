import React from "react";
import useMessageStore from "../store/hooks/use-message-store.hook";
import getCssClassNameByMessageType from "../utils/get-css-class-name-by-message-type.util";

const MessageList = () => {
  const { messageList } = useMessageStore();
  return (
    <ul className="h-full border border-gray-500 overflow-auto">
      {messageList.map((message) => (
        <li className={`${getCssClassNameByMessageType(message.type)} border-b border-gray-500 p-0.5 flex justify-between`} key={message.id}>
          <span>{message.text}</span>
          <span>{message.timeStamp}</span>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(MessageList);
