import React from "react";
import useMessageStore from "../store/hooks/use-message-store.hook";
import usePlayerHungerStore from "../store/hooks/use-player-hunger-store.hook";
import getRandonNumber from "../utils/get-random-number.util";

const useCheckHungerValueForSkill = () => {
  const { playerHungerValue } = usePlayerHungerStore();
  const { addMessage } = useMessageStore();

  const showMessage = React.useCallback(() => {
    addMessage({
      text: "You failed. Because you are too hungry.",
      type: "warning",
    });
  }, [addMessage]);

  const checkHungerValueForSkillSuccess = React.useCallback(() => {
    if (playerHungerValue <= 30) {
      const successChance = getRandonNumber();
      if (playerHungerValue > 20 && successChance < 40) {
        showMessage();
        return false;
      }

      if (playerHungerValue <= 20 && playerHungerValue > 10 && successChance < 70) {
        showMessage();
        return false;
      }

      if (playerHungerValue <= 10 && playerHungerValue > 5 && successChance < 90) {
        showMessage();
        return false;
      }
    }
    return true;
  }, [playerHungerValue, showMessage]);

  const checkHungerValue = React.useCallback(() => {
    if (playerHungerValue <= 5) {
      addMessage({
        text: "You can not do that. HUNGRY!",
        type: "error",
      });
      return false;
    }
    return true;
  }, [playerHungerValue, addMessage]);

  return {
    checkHungerValueForSkillSuccess,
    checkHungerValue,
  };
};

export default useCheckHungerValueForSkill;
