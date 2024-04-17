const text = 'abc def ghi';

// Find first target entrance index in text

export const tableSearch = (source: string, target: string): number => {
  const barrier = '|';
  target += barrier;
  const N = source.length - 1;
  let l = 0;
  let r = N;
  let i = -1;

  while (l < r) {
    let middle = Math.floor((l + r) / 2);
    i = 0;

    while (target[i] !== barrier && target[i] === source[i]) {
      i++;
    }

    if (source[middle] < target[i]) {
      l = middle + 1;
    } else {
      r = middle;
    }
  }

  if (r < N) {
    i = 0;

    while (target[i] !== barrier && target[i] === source[i]) {
      i++;
    }
  }

  if (r < N && target[i] === source[i]) {
    return l;
  }

  return l;
};
console.log(tableSearch(text, 'def'));
console.log(text[4]);
