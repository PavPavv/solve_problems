type Structure = {
  id: number;
  name: string;
};

const ORDERED_DATA: Structure[] = [
  {
    id: 1,
    name: 'Jack',
  },
  {
    id: 2,
    name: 'Mag',
  },
  {
    id: 3,
    name: 'Paul',
  },
  {
    id: 4,
    name: 'Alex',
  },
  {
    id: 5,
    name: 'Vikki',
  },
];

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
// console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 2));

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
