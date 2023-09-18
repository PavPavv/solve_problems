export const findPrevDuplicate = (arr: number[]): boolean => {
  for (var i = 1; i < arr.length; i++) {
    var prev = arr[i - 1];
    if (prev === arr[i]) {
      return true;
    }
  }
  return false;
};
console.log(findPrevDuplicate([2, 4, 5, 1, 3, 3, 7, 8, 9, 10, 300])); //	true
console.log(findPrevDuplicate([2, 4, 5, 1, 3, 7, 8, 9, 10, 300])); //	false
//	O(n - k)
