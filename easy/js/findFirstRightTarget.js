function findFirstRightTarget(arr, target) {
  const result = [-1, -1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result[0] = i;
      result[1] = arr[i];
    }
  }
  return result;
}
console.log(findFirstRightTarget([1, 2, 3, 1, 2, 3], 3));
// O(n)

function findFirstRightTarget1(arr, target) {
  const result = [-1, -1];
  for (let i = arr.length; i > 0; i--) {
    if (arr[i] === target) {
      result[0] = i;
      result[1] = arr[i];
      break;
    }
  }
  return result;
}
console.log(findFirstRightTarget1([1, 2, 3, 1, 2, 3], 3));
// O(n-k)
