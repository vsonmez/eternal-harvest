import React from "react";
import HeaderComponent from "./ui/header/header.component";
import SkillActionsComponent from "./skill-actions/skill-actions.component";
import MessageListComponent from "./message/message-list.component";
import useTimeTrackerWithReward from "./custom-hooks/use-time-tracker-with-reawrd.hook";
import FooterComponent from "./ui/footer/footer.component";
import LocationInfoComponent from "./travel/location-info.component";

function App() {
  useTimeTrackerWithReward();

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
