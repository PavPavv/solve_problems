export const rangeSum = (a: number, b: number): number => {
  let result = 0;
  const start = a > b ? b : a;
  const end = a < b ? b : a;

  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};
console.log(rangeSum(3, 5));
//	O(n)
