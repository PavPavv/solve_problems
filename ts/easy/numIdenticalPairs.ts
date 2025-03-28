/*
  Given an array of integers nums, return the number of good pairs.
  A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/

function numIdenticalPairs(nums: number[]): number {
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
          if (i < j && nums[i] === nums[j]) {
              result.push([nums[i], nums[j]]);
          }
      }
  }
  return result.length;
};