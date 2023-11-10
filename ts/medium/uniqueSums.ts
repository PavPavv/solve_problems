export const uniqueSums = (arr: number[], target: number): number[][] => {
  const hashTable: Record<string, number> = {};
  const result: number[][] = [];

  for (let i = 0; i < arr.length; i++) {
    hashTable[arr[i]] = i;
  }
  for (const num in hashTable) {
    var secondNum = target - Number(num);
    if (hashTable[secondNum] && secondNum > +num) {
      result.push([+num, secondNum]);
    }
  }
  return result;
};
console.log(uniqueSums([1, 2, 3, 4, 5, 6], 6));
