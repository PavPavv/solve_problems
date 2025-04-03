function transformArray(nums: number[]): number[] {
  return nums
          .map((item) => Number(item % 2 !== 0))
          .sort((a,b) => a - b);
};
console.log(transformArray([1,5,1,4,2]));