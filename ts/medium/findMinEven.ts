const findMinEven = (arr: number[]): number => {
  return Math.min(...arr.filter((item: number) => item % 2 === 0));
};
console.log(findMinEven([10, -2, 1, 2, 3, 4, 5])); //  -2
