const findDuplicatesInRange = (
  arr: number[],
  l: number,
  r: number,
  target: number,
): number => {
  let counter = 0;
  let start = l < 0 ? 0 : l;
  let end = r < 0 ? 0 : r;

  if (start > end) {
    [start, end] = [end, start];
  }

  for (var i = start; i < end; i++) {
    if (arr[i] === target) {
      counter++;
    }
  }
  return counter;
};
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
