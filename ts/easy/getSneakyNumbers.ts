/*
  In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list,
  however, two mischievous numbers sneaked in an additional time, making the list longer than usual.

  As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to
  Digitville.
*/

function getSneakyNumbers(nums: number[]): number[] {
  const obj: Record<string, number> = {};
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }
  for (const key in obj) {
      if (obj[key] > 1) {
          result.push(Number(key));
      }
  }
  return result;
};