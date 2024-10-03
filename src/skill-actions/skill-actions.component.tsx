import React from "react";
import WoodCollectorComponent from "../skills/woodcutting/wood-collector.component";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import BeggingComponent from "../skills/begging/begging.component";

const SkillActions = () => {
  const {
    getGlobal: { skillActionype },
  } = useGlobalStore();

  switch (skillActionype) {
    case "woodcutting":
      return <WoodCollectorComponent />;
    case "begging":
      return <BeggingComponent />;
    default:
      return <></>;
  }
};

export default React.memo(SkillActions);
