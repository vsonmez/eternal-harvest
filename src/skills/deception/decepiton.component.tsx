import React from "react";
import useDeceptionStore from "../../store/hooks/skills/use-deception-store.hook";
import deceptionConstant from "../../constants/deception.constants";
import useMessageStore from "../../store/hooks/use-message-store.hook";
import useBeggingStore from "../../store/hooks/skills/use-begging-store.hook";

type Props = {
  checkEXPgain: boolean;
};

const Deception: React.FC<Props> = ({ checkEXPgain }) => {
  const { beggingLevel } = useBeggingStore();
  const { addMessage } = useMessageStore();
  const { deceptionLevel, deceptionXP, deceptionXPToNextLevel, increaseDeceptionXP, increaseDeceptionLevel } = useDeceptionStore();

  React.useEffect(() => {
    if (checkEXPgain) {
      increaseDeceptionXP(1);
      addMessage({
        text: "You gained deception xp.",
        type: "success",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkEXPgain]);

  React.useEffect(() => {
    if (deceptionLevel < deceptionConstant.levelLimit) {
      if (deceptionXP >= deceptionXPToNextLevel) {
        increaseDeceptionLevel();
        addMessage({
          text: `Deception level increased to ${deceptionLevel + 1}`,
          type: "perfect",
        });
      }
    }
  }, [deceptionLevel, deceptionXP, deceptionXPToNextLevel, increaseDeceptionLevel, addMessage]);

  return (
    <div className=" flex flex-col gap-2 text-xs text-gray-300">
      <div className="bg-black/60 p-2 flex flex-col gap-1">
        <h2 className="flex justify-between gap-0.5">
          <span>Deception</span>
          <span>
            {deceptionLevel}/{deceptionConstant.levelLimit}
          </span>
        </h2>
        <h3>
          <span>
            XP: {deceptionXP}/{deceptionXPToNextLevel}
          </span>
        </h3>
        <span>Passive Skill</span>
        {beggingLevel < 10 && <span className="text-rose-300">Need 10 Begging.</span>}
      </div>
    </div>
  );
};

export default React.memo(Deception);
