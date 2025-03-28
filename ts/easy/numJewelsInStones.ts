/*
  You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
  Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
  Letters are case sensitive, so "a" is considered a different type of stone from "A".
  Input: jewels = "aA", stones = "aAAbbbb"
  Output: 3
*/

function numJewelsInStones(jewels: string, stones: string): number {
  const jArr = jewels.split('');
  let counter = 0;
  for (const j of jArr) {
      for (let i = 0; i < stones.length; i++) {
          if (stones[i] === j) {
              counter++;
          }
      }
  }
  return counter;
};