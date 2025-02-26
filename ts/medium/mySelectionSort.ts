const a1 = [1,2,3,4];
const a2 = [4,3,2,1];
const a3 = [2,1,3,4];
const b1 = [8,2,5,1,3,4,7,6];
const b2 = [8,7,6,5,4,3,2,1];
const b3 = [2,1,3,4,6,5,7,8];
const c1 = [10,1,5,100,3,2,15,9]; // [1,2,3,5,9,10,15,100]

function mySelectionSort(arr: number[]): number[] {
  const result = [...arr];
  
  for (let i = 0; i < result.length; i++) {
    let smallestIdx = i;
    for (let j = smallestIdx + 1; j < result.length; j++) {
      if (result[j] < result[smallestIdx]) {
        smallestIdx = j;
      }
    }
    const swap = result[i];
    result[i] = result[smallestIdx];
    result[smallestIdx] = swap;
  }
  return result;
}
console.log(mySelectionSort([3,1,4,2]));
console.log(mySelectionSort(a1));
console.log(mySelectionSort(a2));
console.log(mySelectionSort(a3));
console.log(mySelectionSort(b1));
console.log(mySelectionSort(b2));
console.log(mySelectionSort(b3));
console.log(mySelectionSort(c1));

// O(n^2)