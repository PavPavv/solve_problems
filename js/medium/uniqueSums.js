/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 * func([1,2,3,4,5,6], 6) -> [[1,5], [2,4]];
 */

function uniqueSums(arr, target) {
  var hashTable = {};
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    hashTable[arr[i]] = i;
  }
  for (var num in hashTable) {
    var secondNum = target - num;
    if (hashTable[secondNum] && secondNum > +num) {
      result.push([+num, secondNum]);
    }
  }
  return result;
}
console.log(uniqueSums([1, 2, 3, 4, 5, 6], 6));
