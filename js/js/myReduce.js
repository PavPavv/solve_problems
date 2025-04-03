var reduce = function(nums, fn, init) {
  if (!nums.length) return init;
  var res = init;
  for (let i = 0; i < nums.length; i++) {
      res = fn(res, nums[i]);
  }
  return res;
};

const newArray = reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100);
console.log(newArray);