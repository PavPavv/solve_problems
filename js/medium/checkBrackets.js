function checkBrackets(s) {
  if (!s.trim().length) return false;
  var pairs = {
    open: ['(', '[', '{'],
    close: [')', ']', '}'],
  };
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    var item = s[i];
    if (pairs.open.includes(item)) {
      stack.push(item);
    } else if (pairs.close.includes(item)) {
      var closeIdx = pairs.close.indexOf(item);
      var openBracket = pairs.open[closeIdx];
      if (openBracket === stack[stack.length - 1]) {
        stack.splice(-1, 1);
      } else {
        stack.push(item);
      }
    }
  }
  return stack.length === 0 ? true : false;
}
console.log(checkBrackets('(){}[]')); //  true
console.log(checkBrackets('([{}])')); //  true
console.log(checkBrackets('([{}{}{}])')); //  true
console.log(checkBrackets('([{}{}{}]')); //  false
console.log(checkBrackets('[{}]]]')); //  false
console.log(checkBrackets(' ')); //  false
// O(n)
