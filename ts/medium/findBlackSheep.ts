export const findBlackSheep = (arr: number[]): number => {
  const bArr = arr.map((x) => x % 2);
  const bSum = bArr.reduce((a, b) => a + b, 0);
  const bArrTargetVal = bSum > 1 ? 0 : 1;
  return arr[bArr.indexOf(bArrTargetVal)];
};

console.log(findBlackSheep([2, 4, 6, 8, 9, 10, 12]));
