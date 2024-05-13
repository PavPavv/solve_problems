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

const insertionSort = (arr: TUser[]): TUser[] => {
  const source = [...arr];
  let j;

  for (let i = 1; i < source.length; i++) {
    const item = source[i];
    j = i;

    while (j > 0 && item.id < source[j - 1].id) {
      source[j] = source[j - 1];
      j--;
    }
    source[j] = item;
  }

  return source;
};
console.log(insertionSort(users));
