import React from "react";
import HeaderComponent from "./ui/header/header.component";
import SkillActionsComponent from "./skill-actions/skill-actions.component";
import MessageListComponent from "./message/message-list.component";
import useTimeTrackerWithReward from "./custom-hooks/use-time-tracker-with-reawrd.hook";
import FooterComponent from "./ui/footer/footer.component";
import LocationInfoComponent from "./travel/location-info.component";
import useMessageStore from "./store/hooks/use-message-store.hook";
import Translation from "./language/transltion";

function App() {
  const language = React.useMemo(() => localStorage.getItem("language") || "en", []);
  const { addMessage } = useMessageStore();
  useTimeTrackerWithReward();

  React.useEffect(() => {
    Translation.welcomeMessages.forEach((message) => {
      addMessage({
        text: language === "en" ? message.en : message.tr,
        type: message.type as MessageTypes,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <div className="h-screen flex flex-col m-auto">
      <HeaderComponent />
      <div className="h-full flex flex-col justify-between overflow-auto p-2 gap-2">
        <LocationInfoComponent />
        <SkillActionsComponent />
        <MessageListComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default React.memo(App);
