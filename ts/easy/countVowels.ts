export const countVowels = (word: string): number => {
  const matched = word.match(/[aeiou]/gi);
  return matched ? matched.length : 0;
};
console.log(countVowels('wolf'));
//	O(n)
