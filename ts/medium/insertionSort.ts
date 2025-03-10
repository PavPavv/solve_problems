type TUser = {
  id: number;
  name: string;
};

const users: TUser[] = [
  {
    id: 8,
    name: 'Tom',
  },
  {
    id: 3,
    name: 'Dave',
  },
  {
    id: 2,
    name: 'Mag',
  },
  {
    id: 9,
    name: 'Billy',
  },
  {
    id: 4,
    name: 'John',
  },
  {
    id: 1,
    name: 'Jack',
  },
  {
    id: 5,
    name: 'James',
  },
  {
    id: 7,
    name: 'Kurt',
  },
  {
    id: 6,
    name: 'Lars',
  },
];

const insertionSort = (source: TUser[]): TUser[] => {
  const arr = [...source];
  let j;

  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    j = i;

    while (j > 0 && item.id < arr[j - 1].id) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = item;
  }

  return arr;
};
console.log(insertionSort(users));

function anotherInsertionSort(arr: number[]): number[] {
  const result = [...arr];
  for (let i = 1; i < result.length; i++) {
    let j = i;
    while (j && result[j - 1] > result[j]) {
      let swap: number | null = result[j - 1];
      result[j - 1] = result[j];
      result[j] = swap;
      j -= 1;
      swap = null;
    }
  }
  return result;
}
console.log(anotherInsertionSort([1,2,3,4,5,6,9,7,8]));
