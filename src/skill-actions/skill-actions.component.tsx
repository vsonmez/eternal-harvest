import React from "react";
import WoodCollectorComponent from "../skills/woodcutting/wood-collector.component";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import BeggingComponent from "../skills/begging/begging.component";
import FishingComponent from "../skills/fishing/fishing.component";

const SkillActions = () => {
  const {
    getGlobal: { skillActionype },
  } = useGlobalStore();

  switch (skillActionype) {
    case "woodcutting":
      return <WoodCollectorComponent />;
    case "begging":
      return <BeggingComponent />;
    case "fishing":
      return <FishingComponent />;
    default:
      return <></>;
  }
};

export default React.memo(SkillActions);
