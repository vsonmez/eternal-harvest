import React from "react";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import ToastrMessageComponent from "./toastr-message.component";

const Toastr = () => {
  const { toastrList } = useToastrStore();
  return (
    <ul className="fixed bottom-0 right-0 z-[10000]">
      {toastrList.map((message) => (
        <li key={message.id}>
          <ToastrMessageComponent message={message} />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Toastr);
