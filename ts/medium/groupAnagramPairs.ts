export const groupAnagramPairs = (arr: string[]): string[][] => {
  var hashTable: { [key: string]: string[] } = {};
  for (var i = 0; i < arr.length; i++) {
    var sortedItem: string = arr[i]
      .toLowerCase()
      .trim()
      .split('')
      .sort()
      .join('');
    if (hashTable[sortedItem]) {
      hashTable[sortedItem].push(arr[i]);
    } else {
      hashTable[sortedItem] = [arr[i]];
    }
  }
  return Object.values(hashTable);
};
console.log(groupAnagramPairs(['ann', 'nan', 'd', 'pie', 'cort', 'iep']));
