/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
console.log(sortBy([5, 4, 3, 2, 1, 0, -1, -2], (x) => x));