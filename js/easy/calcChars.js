/**
 * @param {string} str
 * @return {string}
 * f('BBBAADDDDDECCCC') -> 'A2B3C4D5E1'
 */

function calcChars(str) {
  var s = str.trim().split('').sort().join('');
  var hashTable = {};
  var result = '';
  for (var i = 0; i < s.length; i++) {
    hashTable[s[i]] = hashTable[s[i]] ? hashTable[s[i]] + 1 : 1;
  }

  for (var [key, value] of Object.entries(hashTable)) {
    result += key + '' + value;
  }
  return result;
}
console.log(calcChars('BBBAADDDDDECCCC'));
