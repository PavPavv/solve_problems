/*
  You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
  Return the score of s.
*/

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s: string): number {
  let result = 0;
  for (let i = 1; i < s.length; i++) {
      const prev = s[i - 1].charCodeAt(0);
      const current = s[i].charCodeAt(0);
      result += Math.abs(prev - current);
  }
  return result;
};