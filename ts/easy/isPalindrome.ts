export const isPalindrome = (str: string) => {
  const reversed = str.toLowerCase().split('').reverse().join('');
  return str.toLowerCase() === reversed;
};
console.log(isPalindrome('Ana')); //	true
console.log(isPalindrome('cat')); //	false
// O(n)

// bad solution: too much recursion
const isPalindromeR = (str: string): boolean => {
  if (str.length <= 1) {
      return true;
  }
  if (str[0] !== str[str.length - 1]) {
      return false;
  }
  str.slice(1,-1);
  return isPalindromeR(str);
}
// console.log(isPalindromeR('a'));
// console.log(isPalindromeR('ana'));
// console.log(isPalindromeR('racecar'));
// console.log(isPalindromeR('car'));