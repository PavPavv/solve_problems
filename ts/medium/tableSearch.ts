const text = 'abc def ghi';

export const tableSearch = (source: string, target: string): any => {
  const barrier = '|';
  target += barrier;
  const N = source.length - 1;
  let l = 0;
  let r = N;
  let i = -1;

  while (l < r) {
    let middle = Math.floor((l + r) / 2);
    i = 0;

    while (target[i] !== barrier && target[i] === source[middle][i]) {
      i++;
    }

    if (source[middle][i] < target[i]) {
      l = middle + 1;
    } else {
      r = middle;
    }
  }

  if (r < N) {
    i = 0;

    while (target[i] !== barrier && target[i] === source[r][i]) {
      i++;
    }
  }

  if (r < N && target[i] === source[r][i]) {
    return { l, r, i };
  }

  return { l, r, i };
};
console.log(tableSearch(text, 'def'));

// TODO: not really sure about what this algorithm is going to do. (Skipped it)
