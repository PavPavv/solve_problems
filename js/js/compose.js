/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  if (!functions.length) {
    return (x) => x;
  }
  
  return function(x) {
      return functions.reduceRight((acc, fn) => fn(acc), x);
  }
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/