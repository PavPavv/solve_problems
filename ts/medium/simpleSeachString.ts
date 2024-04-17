const simpleSearchString = (text: string, pattern: string): number => {
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
console.log(simpleSearchString('spaceship', 'ship'));
console.log('spaceship'[simpleSearchString('spaceship', 'ship')]);
