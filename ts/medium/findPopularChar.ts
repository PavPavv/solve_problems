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

const findPopularChar1 = (str: string): string[] => {
  if (!str || !str.trim()) return [];
  const hashTable: Record<string, number> = {};

  for (const char of str) {
    hashTable[char] = hashTable[char] ? hashTable[char] + 1 : 1
  }

  const sortedTableByValue = Object.values(hashTable).sort();
  if (sortedTableByValue.length > 1) {
    const maxVal = sortedTableByValue[sortedTableByValue.length - 1];
    return Object.keys(hashTable).filter((key) => hashTable[key] === maxVal) ?? [];
  }

  return Object.keys(hashTable);
};
console.log(findPopularChar1('  '));
console.log(findPopularChar1('-'));
console.log(findPopularChar1('bbbaaccc'));
console.log(findPopularChar1('babacaddaagag'));

