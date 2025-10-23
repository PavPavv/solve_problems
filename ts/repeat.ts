/// <reference lib="ES2015" />

export const main = async (): Promise<void> => {
  // TOTAL: binary search, recursion binary search, selection sort, recursion, quick sort
  
  // prev repeat: selection sort
  // next repeat: recursion funcs

  type TSearchOptions = {
    min: boolean;
  }

  const findIdx = (arr: number[], options?: TSearchOptions): number => {
    let peak = arr[0];
    let idx = 0;
    const maxSearch = options && options.min ? false : true;

    for (let i = 0; i < arr.length; i++) {
      const item  = arr[i];
      if (maxSearch && item > peak) {
        peak = item;
        idx = i;
      } else if (!maxSearch && item < peak) {
        peak = item;
        idx = i;
      }
    }
    return idx;
  }

  const selectionSort = (arr: number[]): number[] => {
    const copy = arr.slice();
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      const maxIdx = findIdx(copy, { min: true });
      result.push(copy.splice(maxIdx, 1));
    }
    return result;
  }
  console.log(selectionSort([20,4,5,31,1,-5,-15]));
};
main();