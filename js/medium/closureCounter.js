function count(num) {
  var counter = num || 0;
  return function () {
    return counter++;
  };
}

var test1 = count(1);
test1();
test1();
test1();
console.log(test1());

// IIFE
var count1 = (function (num) {
  var counter = num || 0;
  return function () {
    return counter++;
  };
})(100);

count1();
count1();
count1();
count1();
var result1 = count1();
console.log(result1);
