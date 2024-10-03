import woodcutterConstant from "../../../constants/woodcutter.constant";
import getRandonNumber from "../../../utils/get-random-number.util";

const getExtraWoodByLevel = (woodcutterLevel: number) => {
  const randomNumber = getRandonNumber();
  const luckPoint = Math.min(woodcutterLevel, woodcutterConstant.bonusLimit);
  const extraWood = randomNumber <= luckPoint ? 1 : 0;
  const extraWoodMessage = extraWood > 0 ? "(+1 lvl bonus)." : "";

  return {
    extraWood,
    extraWoodMessage,
  };
};

export default getExtraWoodByLevel;
