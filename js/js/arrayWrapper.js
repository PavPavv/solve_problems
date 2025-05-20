'use strict';

function main() {
  function ArrayWrapper(nums) {
    this.nums = nums;
  }

  ArrayWrapper.prototype.valueOf = function () {
    return this.nums.reduce((a, b) => a + b, 0);
  };

  ArrayWrapper.prototype.toString = function () {
    return `[${this.nums.join(',')}]`;
  };

  var obj1 = new ArrayWrapper([1, 2]);
  var obj2 = new ArrayWrapper([3, 4]);
  console.log(obj1 + obj2); // 10

  console.log(String(obj1));  //  "[1,2]"
  console.log(String(obj2));  //  "[3,4]"
}
main();