export const checkBrackets = (s: string): boolean => {
  if (!s.trim().length) return false;
  const pairs = {
    open: ['(', '[', '{'],
    close: [')', ']', '}'],
  };
  const stack: string[] = [];

  for (const item of s) {
    if (pairs.open.includes(item)) {
      stack.push(item);
    } else if (pairs.close.includes(item)) {
      var openBracket = pairs.open[pairs.close.indexOf(item)];
      if (openBracket === stack[stack.length - 1]) {
        stack.splice(-1, 1);
      } else {
        stack.push(item);
      }
    }
  }
  return stack.length === 0 ? true : false;
};
console.log(checkBrackets('(){}[]'));
console.log(checkBrackets('([{}])'));
console.log(checkBrackets('([{}{}{}])'));
console.log(checkBrackets('([{}{}{}]'));
console.log(checkBrackets('[{}]]]'));
console.log(checkBrackets(' '));
