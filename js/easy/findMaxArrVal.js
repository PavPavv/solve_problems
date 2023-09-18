var arr = [3, 5, 2, 1, 3, 7, 66, 8, 9, 4, 100, 45];

function findMaxArrVal(a) {
  var max = a[0];
  for (var i = 1; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }
  return max;
}
console.log(findMaxArrVal(arr));
// O(n-1)
