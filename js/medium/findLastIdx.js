/**
 * @param {string} str
 * @param {string} a
 * @param {string} b
 * @return {number}
 * f('abbaao', 'a', 'b') -> { a: 4 }
 */

function findMaxIdx(str, targetA, targetB) {
  var a = str.lastIndexOf(targetA);
  var b = str.lastIndexOf(targetB);
  if (a >= b) {
    return {
      [targetA]: str.lastIndexOf(targetA),
    };
  } else if (a < b) {
    return {
      [targetB]: str.lastIndexOf(targetB),
    };
  }
  return {};
}
console.log(findMaxIdx('abbaao', 'a', 'b'));

function myLastIndexOf(str, target) {
  var result = -1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === target) {
      result = i;
    }
  }
  return result;
}

String.prototype.customLastIndexOf = function (target) {
  var result = -1;
  var str = this.valueOf();
  for (var i = 0; i < str.length; i++) {
    if (str[i] === target) {
      result = i;
    }
  }
  return result;
};

function customFindMaxIdx(str, targetA, targetB) {
  var a = str.customLastIndexOf(targetA);
  var b = str.customLastIndexOf(targetB);
  if (a >= b) {
    return {
      [targetA]: str.customLastIndexOf(targetA),
    };
  } else if (a < b) {
    return {
      [targetB]: str.customLastIndexOf(targetB),
    };
  }
  return {};
}
console.log(customFindMaxIdx('abbaao', 'a', 'b'));
