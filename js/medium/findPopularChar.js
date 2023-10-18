function findPopularChar(str) {
  var hashTable = {};
  var min = 0;
  var result = '';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    hashTable[char] = hashTable[char] ? hashTable[char] + 1 : 1;
  }

  for (var key in hashTable) {
    if (hashTable[key] > min) {
      min = hashTable[key];
      result = key;
    }
  }

  return result;
}
console.log(f('ababa')); // 'a'
