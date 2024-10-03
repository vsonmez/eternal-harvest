import React from "react";
import Item from "../items/models/item.type";

const useGetSkillCountdownTime = (itemDef: Item | null, skillDefaultCountdownTime: number) => {
  const [countdownTime, setCountdownTime] = React.useState(0);
  React.useEffect(() => {
    if (itemDef) {
      const calculatedCountdownTime = skillDefaultCountdownTime - itemDef.bonuses.countdownTime;
      const countdownTime = Math.max(1, calculatedCountdownTime);
      setCountdownTime(countdownTime);
    }
  }, [itemDef, skillDefaultCountdownTime]);

  return countdownTime;
};

export default useGetSkillCountdownTime;
