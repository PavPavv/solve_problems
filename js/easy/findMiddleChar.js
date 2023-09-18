function findMiddleChar(str) {
  return str[Math.floor(str.length / 2)];
}
console.log(findMiddleChar('test'));
console.log(findMiddleChar('testing'));
// O(1)
