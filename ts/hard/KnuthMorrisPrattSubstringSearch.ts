const KnuthMorrisPrattSubstringSearch = (
  pattern: string,
  text: string,
): number => {
  const M = pattern.length;
  const N = text.length;
  let r = -1;
  let i: number;
  let j = 1;
  let k = 0;
  const d: number[] = [];

  d[0] = -1;

  if (pattern[0] !== pattern[1]) {
    d[1] = 0;
  } else {
    d[1] = -1;
  }

  while (j < M - 1) {
    if (k >= 0 && pattern[j] !== pattern[k]) {
      k = d[k];
    } else {
      j++;
      k++;
      if (pattern[j] !== pattern[k]) {
        d[j] = k;
      } else {
        d[j] = d[k];
        // console.log('d[j] === D[j]', d[j]);
      }
    }
  }

  i = 0;
  j = 0;

  while (j < M && i < N) {
    if (j >= 0 && text[i] !== pattern[j]) {
      j = d[j];
    } else {
      i++;
      j++;
    }
  }

  if (j === M) {
    r = i - M;
  } else {
    r = -1;
  }

  return r;
};
console.log(
  KnuthMorrisPrattSubstringSearch('ABCDABD', 'ABC ABCDAB ABCDABCDABDE'),
);
