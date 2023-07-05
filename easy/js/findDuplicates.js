function findDuplicates(arr) {
  var hashTable = {};
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    hashTable[arr[i]] = hashTable[arr[i]] ? hashTable[arr[i]] + 1 : 1;
  }

  for (var key in hashTable) {
    if (hashTable[key] > 1) {
      result.push(key);
    }
  }
  return result;
}
console.log(findDuplicates([1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9]));
console.log(findDuplicates([1, 2, 3, 4, 5]));
//	O(n)
