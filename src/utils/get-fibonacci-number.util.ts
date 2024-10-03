const memo: number[] = [1, 2];
const getFibonacciNumber = (index: number) => {
  if (memo[index] === undefined) {
    memo[index] = getFibonacciNumber(index - 1) + getFibonacciNumber(index - 2);
  }
  return memo[index];
};
export default getFibonacciNumber;
