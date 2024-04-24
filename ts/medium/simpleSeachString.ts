const simpleSearchString = (pattern: string, text: string): number => {
  const N = text.length;
  const M = pattern.length;
  let i = 0;
  let j = 0;

  // Dijkstra loop (while loop with many branches/conditions)
  // N - M: possible coincident string length
  // j < M: pattern index can not be more than pattern length
  // text[i + j] === pattern[j]: ???

  // can extend coincident segment

  while (i <= N - M && j < M) {
    if (text[i + j] === pattern[j]) {
      j++;
    } else {
      i++;
      j = 0;
    }
  }

  return i;
};
console.log(simpleSearchString('ABCDABD', 'ABC ABCDAB ABCDABCDABDE'));

// Searches only by separated words
const mySearch = (pattern: string, text: string): number => {
  const TEXT_ARR = text.split(' ');
  let wordResult = 0;
  let result = 0;

  for (let i = 0; i < TEXT_ARR.length; i++) {
    if (TEXT_ARR[i] === pattern) {
      wordResult = i;
    }
  }

  if (wordResult === 0) {
    result = 0;
  } else {
    for (let i = 0; i < wordResult; i++) {
      result += TEXT_ARR[i].length + 1;
    }
  }

  return result;
};
console.log(mySearch('ABCDABCDABDE', 'ABC ABCDAB ABCDABCDABDE'));
