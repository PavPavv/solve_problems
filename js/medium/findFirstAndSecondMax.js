function findFirstAndSecondMax(arr) {
  if (arr.length < 2) {
    return [];
  }
  var max1 = Math.max(arr[0], arr[1]);
  var max2 = Math.min(arr[0], arr[1]);

  for (var i = 2; i < arr.length; i++) {
    var el = arr[i];
    if (el > max1) {
      max2 = max1;
      max1 = el;
    } else if (el < max1 && el > max2) {
      max2 = el;
    }
  }
  return [max1, max2];
}
console.log(findFirstAndSecondMax([10, -2, 1, 2, 3, 4, 5]));
