import getRandonNumber from "./get-random-number.util";

const checkItemTakingDamage = () => {
  const randomNumber = getRandonNumber();
  return randomNumber === 1;
};

export default checkItemTakingDamage;
