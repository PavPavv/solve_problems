function groupAnagramPairs(arr) {
  var hashTable = {};
  for (var i = 0; i < arr.length; i++) {
    var sortedItem = arr[i].toLowerCase().trim().split('').sort().join('');
    if (hashTable[sortedItem]) {
      hashTable[sortedItem].push(arr[i]);
    } else {
      hashTable[sortedItem] = [arr[i]];
    }
  }
  return Object.values(hashTable);
}
console.log(groupAnagramPairs(['ann', 'nan', 'd', 'pie', 'cort', 'iep']));
