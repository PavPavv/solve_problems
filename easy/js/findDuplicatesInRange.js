function findDuplicatesInRange(arr, l, r, target) {
  var counter = 0;
  var start = l < 0 ? 0 : l;
  var end = r < 0 ? 0 : r;

  if (start > end) {
    [start, end] = [end, start];
  }

  for (var i = l; i < r; i++) {
    if (arr[i] === target) {
      counter++;
    }
  }
  return counter;
}
console.log(findDuplicatesInRange([0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 0], 1, 5, 0));
console.log(
  findDuplicatesInRange(
    [0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 0, 9, 9, 9, 10],
    1,
    5,
    9,
  ),
);
// O(n)
