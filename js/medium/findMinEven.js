function findMinEven(arr) {
  var min = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return min;
}
console.log(findMinEven([10, -2, 1, 2, 3, 4, 5])); //  -2
