import React from "react";
import HeaderComponent from "./ui/header/header.component";
import SkillActionsComponent from "./skill-actions/skill-actions.component";
import MessageListComponent from "./message/message-list.component";
import useTimeTrackerWithReward from "./custom-hooks/use-time-tracker-with-reawrd.hook";
import FooterComponent from "./ui/footer/footer.component";
import LocationInfoComponent from "./travel/location-info.component";
import useMessageStore from "./store/hooks/use-message-store.hook";

function App() {
  const { addMessage } = useMessageStore();
  /* useTimeTrackerWithReward(); */

  React.useEffect(() => {
    addMessage({
      text: "You are in Market Place. You can buy stuff only there.",
      type: "success",
    });
    addMessage({
      text: "I promise you there will be no ads in this game!",
      type: "warning",
    });
    addMessage({
      text: "Wiki pages will be added soon.",
      type: "info",
    });
    addMessage({
      text: "Welcome to your adventure. Good luck!",
      type: "info",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
