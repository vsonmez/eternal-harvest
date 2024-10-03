const getCssClassNameByMessageType = (messageType: MessageTypes) => {
  switch (messageType) {
    case "error":
      return "text-red-500";
    case "success":
      return "text-teal-500";
    case "info":
      return "text-gray-500";
    case "warning":
      return "text-yellow-500";
    case "perfect":
      return "bg-orange-700";
    default:
      return "";
  }
};

export default getCssClassNameByMessageType;
