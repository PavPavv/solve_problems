/// <reference lib="ES2015" />

export const main = async (): Promise<void> => {
  /* TOTAL: 
    1. binary search - O(log n)
    2. recursion binary search - 0(log n)
    3. selection sort - O(n^2)
    4. insertion sort - O(n^2)
    5. recursion - O(n)
    6. quick sort - O(n log n)
    7. merge sort - O()
    8. bubble sort - O(n^2)
    9. breadth first search - O()
    10. depth first search - O()
    ...
  */
  
  // prev repeat: bubble sort
  // next repeat: merge sort

  const sortedArr = [1,2,3,4,5,6,7,8,9];
  const TARGET = 9;

  // 1
  const binarySearch = (arr: number[], target: number): number => {
    return 0;
  };
  console.log('binarySearch: ', binarySearch(sortedArr, TARGET)); // 8
  // 2
  const recBinarySearch = (arr: number[], target: number, l: number = 0, r: number | null = null): number => {
    return 0;
  };
  console.log('recBinarySearch: ', recBinarySearch(sortedArr, TARGET)); // 8

  // 3
  const findMinIdx = (arr:  Array<number>): number => {
    return 0;
  };

  const selectionSort = (arr: number[]): number[] => {
    return [];
  };
  console.log('selectionSort: ', selectionSort([5,1,4,3,99,2])); // [1,2,3,4,5,99]

  // 4

  // 5
  const len = (arr: number[]): number => {
    return 0;
  };
  console.log('rec len: ', len([1,2,3,4,5])); // 5

  const sum = (arr: number[]): number => {
    return 0;
  };
  console.log('rec sum: ', sum([1,2,3,4,5])); // 15

  const findMaxRec = (arr: number[]): number => {
    return 0;
  };
  console.log('rec find max: ', findMaxRec([10, 2, 4, 6, 99])); // 99

  // 6
  const quickSort = (arr: number[]): number[] => {
    return [];
  };
  console.log('Quick sort -> ', quickSort([5,1,4,3,99,2]));

  // 7
  const bubbleSort = (arr: number[]): number[] => {
    return [];
  };
  console.log('Bubble sort -> ', bubbleSort([5,1,4,3,99,2]));

  // 8

  // 9

  // 10
};
main();