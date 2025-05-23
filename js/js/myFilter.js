/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
          result.push(arr[i]);
      }
  }
  return result;
};

const newArray = filter([0,10,20,30], function (n) { return n > 10; });
console.log(newArray);