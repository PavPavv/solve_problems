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

const binaryInsertionSort = (source: TUser[]): TUser[] => {
  const arr = [...source];
  const N = arr.length - 1;

  for (let i = 1; i < arr.length; i++) {
    const x = arr[i];
    let l = 0;
    let r = i;

    while (l < r) {
      let middle = Math.floor((l + r) / 2);
      if (arr[middle].id <= x.id) {
        l = middle + 1;
      } else {
        r = middle;
      }
    }

    for (let j = i; j <= r + 1; j = j - 1) {
      arr[j] = arr[j - 1];
    }
    arr[r] = x;
  }
  return arr;
};
console.log(binaryInsertionSort(users));
