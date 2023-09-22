function checkBracketsSimple(s) {
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      var last = stack.pop();
      if (!last) return false;
    }
  }
  return stack.length === 0 ? true : false;
}
console.log(checkBracketsSimple('((()))'));
console.log(checkBracketsSimple('((())'));
console.log(checkBracketsSimple('((())))'));
// O(n)
