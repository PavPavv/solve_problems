export const findPopularChar = (str: string): string => {
  const hashTable: { [key: string]: number } = {};
  let min = 0;
  let result = '';

  for (const char of str) {
    hashTable[char] = hashTable[char] ? hashTable[char] + 1 : 1;
  }

  for (const key in hashTable) {
    if (hashTable[key] > min) {
      min = hashTable[key];
      result = key;
    }
  }

  return result;
};
console.log(findPopularChar('ababa')); // 'a'
