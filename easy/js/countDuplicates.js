function countDuplicates(arr) {
  var hashTable = {};
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]]) {
      hashTable[arr[i]].count += 1;
      hashTable[arr[i]].index.push(i);
    } else {
      hashTable[arr[i]] = {
        item: arr[i],
        count: 1,
        index: [i],
      };
    }
  }

  for (var key in hashTable) {
    if (hashTable[key].count > 1) {
      result.push(hashTable[key]);
    }
  }
  return result;
}
//	{ item: 3, count: 2, index: [2,5], }
console.log(countDuplicates([1, 2, 3, 3, 4, 5, 5, 6, 7]));
console.log(countDuplicates([1, 2, 3, 4, 5, 6, 7]));

// O(n)
