function rangeSum(a, b) {
  var result = 0;
  for (var i = a; i <= b; i++) {
    result += i;
  }
  return result;
}
console.log(rangeSum(3, 5));
//	O(n)
