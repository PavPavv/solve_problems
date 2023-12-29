export const reverseStr = (s: string): string => {
  let counter = 0;
  let result = '';
  while (counter < s.length) {
    counter++;
    result += s[s.length - counter];
  }
  return result;
};
console.log(reverseStr('test'));
