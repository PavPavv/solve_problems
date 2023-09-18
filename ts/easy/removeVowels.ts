export const removeVowels = (str: string): string => {
  let result: string[] = str.split('');
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  for (const char of str) {
    if (VOWELS.includes(char.toLowerCase())) {
      const idx = result.indexOf(char);
      result.splice(idx, 1, '');
    }
  }
  return result.join('');
};
console.log(removeVowels('This website is for losers LOL!')); //  Ths wbst s fr lsrs LL!
console.log(
  removeVowels(
    "No offense but,\nYour writing is among the worst I've ever read",
  ),
); //  N ffns bt, Yr wrtng s mng th wrst 'v vr rd
console.log(removeVowels('What are you, a communist?')); //  Wht r y,  cmmnst?
//	O(n^2)
