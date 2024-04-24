// while (j < 0 && i <= N) {
//   if (text[k - 1] === pattern[j - 1]) {
//     k--;
//     j--;
//   } else {
//     i = i + d[text.indexOf(text[i - 1])];
//     j = M;
//     k = i;
//   }
// }

const boyerMooreSubstrSearch = (pattern: string, text: string): number => {
  const M = pattern.length;
  const N = text.length;
  let i = 0;
  let j = 0;
  let k = 0;
  let r = -1;
  const d: number[] = [];

  for (let l = 0; l < 127; l++) {
    i = l;
    d[i] = M;
  }

  for (let m = 0; m < M - 2; m++) {
    j = m;
    d[text.indexOf(pattern[j])] = M - j - 1;
  }

  i = M;
  j = M;
  k = i;

  console.log(d);

  while (j > 0 && i <= N) {
    if (text[k - 1] === pattern[j - 1]) {
      k--;
      j--;
    } else {
      i = i + d[text.indexOf(text[i - 1])];
      j = M;
      k = i;
    }
  }

  if (j <= 0) {
    r = k;
  }
  console.log(j);
  console.log(k);
  return r;
};
console.log(boyerMooreSubstrSearch('ABCDABD', 'ABC ABCDAB ABCDABCDABDE'));
