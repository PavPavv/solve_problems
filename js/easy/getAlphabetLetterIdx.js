function getAlphabetLetterIdx(letter) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if (alphabet.includes(letter)) {
    return alphabet.indexOf(letter) + 1;
  }
  return -1;
}
console.log(getAlphabetLetterIdx('a'));
console.log(getAlphabetLetterIdx('z'));
console.log(getAlphabetLetterIdx('я'));
