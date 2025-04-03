/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  var returnedArray = [];
  for (let i = 0; i < arr.length; i++) {
      returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
};

const newArray = reduce([1,2,3,4], function (n) { return n + 1; });
console.log(newArray);