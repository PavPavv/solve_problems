export const f = (arr: number[], target: number): number => {
  for (const item of arr) {
    if (item === target) {
      return item;
    }
  }
  return -1;
};
console.log(f([1, 2, 3, 1, 2, 3], 3));
// O(n-k)
