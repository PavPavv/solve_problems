function squareEachNum(num) {
  if (num < 10) {
    return num;
  }
  return +num
    .toString()
    .split('')
    .map((num) => num * num)
    .join('');
}
console.log(squareEachNum(25)); //	425
// O(n)
