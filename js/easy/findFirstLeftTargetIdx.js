function findFirstLeftTargetIdx(arr, target) {
  for (const item of arr) {
    if (item === target) {
      return item;
    }
  }
  return -1;
}
console.log(findFirstLeftTargetIdx([1, 2, 3, 1, 2, 3], 3)); //  2
// O(n-k)
