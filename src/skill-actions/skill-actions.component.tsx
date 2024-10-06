import React from "react";
import WoodCollectorComponent from "../skills/woodcutting/wood-collector.component";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import BeggingComponent from "../skills/begging/begging.component";
import FishingComponent from "../skills/fishing/fishing.component";
import CookingComponent from "../skills/cooking/cooking.component";
import MiningComponent from "../skills/mining/mining.component";
import CaprentryComponent from "../skills/capentry/caprentry.component";

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
    case "cooking":
      return <CookingComponent />;
    case "mining":
      return <MiningComponent />;
    case "carpentry":
      return <CaprentryComponent />;
    default:
      return <></>;
  }
};

export default React.memo(SkillActions);
