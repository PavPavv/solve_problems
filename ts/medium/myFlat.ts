type NestedNumberArray = number | NestedNumberArray[];

const a: NestedNumberArray = [1, 2, 3, [4, 5, 6]];

function myFlat(arr: NestedNumberArray): number[] {
  const acc: number[] = [];

  if (Array.isArray(arr)) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        acc.push(...myFlat(item));
      } else {
        acc.push(item);
      }
    }
  } else {
    acc.push(arr);
  }

  return acc;
}

const flattened = myFlat(a);
console.log(flattened);