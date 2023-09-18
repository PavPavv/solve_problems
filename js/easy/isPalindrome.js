function isPalindrome(str) {
  const reversed = str.toLowerCase().split('').reverse().join('');
  return str.toLowerCase() === reversed;
}
console.log(isPalindrome('Ana')); //	true
console.log(isPalindrome('cat')); //	false
// O(n)
