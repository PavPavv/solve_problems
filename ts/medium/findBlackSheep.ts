export const findBlackSheep = (arr: number[]): number => {
  const bArr = arr.map((x) => x % 2);
  const bSum = bArr.reduce((a, b) => a + b, 0);
  const bArrTargetVal = bSum > 1 ? 0 : 1;
  return arr[bArr.indexOf(bArrTargetVal)];
};

console.log(findBlackSheep([2, 4, 6, 8, 9, 10, 12]));

const findBlackSheep2 = (arr: number[]): number => {
    const isArrEven = arr.slice(0,3).filter((item) => item % 2 === 0).length > 1;
    if (isArrEven) {
        return arr.find((item) => item % 2 !== 0) ?? 0;
    } else {
        return arr.find((item) => item % 2 === 0) ?? 0;
    }
};
console.log(findBlackSheep2([2, 4, 6, 8, 9, 10, 12]));  // 9
console.log(findBlackSheep2([1, 2, 3, 5, 7, 9, 11]));  // 2

