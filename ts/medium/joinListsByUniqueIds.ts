type TItem = {
  id: number;
  [key: string]: any;
}

function join(arr1: TItem[], arr2: TItem[]): TItem[] {
  const commonArr: TItem[] = [...arr1, ...arr2];
  const obj: { [key: number]: TItem } = {};

  for (const item of commonArr) {
    if (item.id in obj) {
      obj[item.id] = { ...obj[item.id], ...item };
    } else {
      obj[item.id] = item;
    }
  }

  return Object.values(obj).sort((a: TItem, b: TItem) => a.id - b.id);
};
console.log(
  join(
    [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ],
    [{ id: 3, x: 5 }],
  ),
);
console.log(
  join(
    [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
    [{ id: 1, b: { c: 84 }, v: [1, 3] }],
  ),
);