export const calcChars = (str: string): string => {
  const s = str.trim().split('').sort().join('');
  const hashTable: Record<string, number> = {};
  let result = '';

  for (let i = 0; i < s.length; i++) {
    hashTable[s[i]] = hashTable[s[i]] ? hashTable[s[i]] + 1 : 1;
  }

  for (const [key, value] of Object.entries(hashTable)) {
    result += key + '' + value;
  }
  return result;
};
console.log(calcChars('BBBAADDDDDECCCC'));
