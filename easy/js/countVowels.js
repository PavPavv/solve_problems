function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for (var i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      counter++;
    }
  }
  return counter;
}
console.log(countVowels('wolf')); //	1
//	O(n)
