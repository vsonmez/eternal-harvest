import getRandonNumber from "./get-random-number.util";

const getExtraItemByLevel = (luckPoint: number) => {
  const randomNumber = getRandonNumber();
  const extraItem = randomNumber <= luckPoint ? 1 : 0;
  const extraItemMessage = extraItem > 0 ? "(+1 lvl bonus)." : "";

  return {
    extraItem,
    extraItemMessage,
  };
};

export default getExtraItemByLevel;
