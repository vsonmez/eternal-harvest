import getRandonNumber from "./get-random-number.util";

const checkItemTakingDamage = () => {
  const firstDice = getRandonNumber(1, 20);
  const secondDice = getRandonNumber(1, 20);
  const randomNumber = firstDice + secondDice;
  return randomNumber <= 2;
};

export default checkItemTakingDamage;
