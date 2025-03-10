export const binarySearch = (arr: number[], target: number): number => {
  let l = 0;
  let r = arr.length - 1;
  let middle = Math.floor((l + r) / 2);

  while (l <= r && arr[middle] !== target) {
    if (arr[middle] < target) {
      l = middle + 1;
    } else {
      r = middle - 1;
    }
    middle = Math.floor((l + r) / 2);
  }
  return middle;
};
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 2));
// O(logN)

export const binarySearch1 = (arr: number[], target: number): number => {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let middle = Math.floor((l + r) / 2);
    if (arr[middle] < target) {
      l = middle + 1;
    } else {
      r = middle;
    }
  }
  return l;
};
console.log(binarySearch1([0, 1, 2, 3, 4, 5, 6, 7], 2));
// O(logN)

function anotherBinarySearch(arr: number[], target: number): number {
  if (!arr) return -1;
  let sliced: number[] = [];
  const mid = Math.floor(arr.length / 2);
  if (target === arr[mid]) return arr[mid];
  else if (target > arr[mid]) {
    sliced = arr.slice(mid + 1, arr.length);
  } else {
    sliced = arr.slice(0, mid - 1);
  }
  return anotherBinarySearch(sliced, target);
}
console.log(anotherBinarySearch([1,2,3,4,5,6,7,8,9], 9));
// O(logN)