export const uniqueSums = (arr: number[], target: number): number[][] => {
  const hashTable: Record<string, number> = {};
  const result: number[][] = [];

  for (let i = 0; i < arr.length; i++) {
    hashTable[arr[i]] = i;
  }
  for (const num in hashTable) {
    var secondNum = target - Number(num);
    if (hashTable[secondNum] && secondNum > +num) {
      result.push([Number(num), secondNum]);
    }
  }
  return result;
};
console.log(uniqueSums([1, 2, 3, 4, 5, 6], 6));

const findUniqueSums1 = (arr: number[], target: number): number[][] => {
  if (arr.length < 2) return [];
  const numSet = new Set(arr);
  const result: number[][] = [];


  for (const num of numSet) {
    const secondNum = target - num;
    if (numSet.has(secondNum) && secondNum > num) {
      result.push([num, secondNum]);
    }
  }
  return result;
};
console.log(findUniqueSums1([1,2,3,4,5,6], 6));
console.log(findUniqueSums1([4,5,6,1,2,3], 6));
