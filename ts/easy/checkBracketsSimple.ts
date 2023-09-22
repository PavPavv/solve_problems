export const checkBracketsSimple = (s: string): boolean => {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (!last) return false;
    }
  }
  return stack.length === 0 ? true : false;
};
console.log(checkBracketsSimple('((()))'));
console.log(checkBracketsSimple('((())'));
console.log(checkBracketsSimple('((())))'));
