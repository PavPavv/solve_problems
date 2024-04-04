type Structure = {
  id: number;
  name: string;
};

const DATA: Structure[] = [
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
];

export const linearSearch = (
  data: Structure[],
  targetId: number,
): Structure | null => {
  let i = 0;

  while (i < data.length && data[i].id !== targetId) {
    i++;
  }

  if (data[i]) return data[i];
  return null;
};

console.log('linearSearch', linearSearch(DATA, 2));
console.log('linearSearch', linearSearch(DATA, 10));

export const linearSearch1 = (
  data: Structure[],
  targetId: number,
): Structure | null => {
  const barrier = data.length;
  data[barrier] = { id: barrier, name: '' };
  let i = 0;

  if (targetId > barrier) return null;

  while (data[i].id !== targetId) {
    i++;
  }

  if (i === barrier) return null;
  return data[i];
};

console.log('linearSearch1', linearSearch1(DATA, 2));
console.log('linearSearch1', linearSearch1(DATA, 10));
