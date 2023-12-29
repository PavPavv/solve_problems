function reverseStr(s) {
  var counter = 0;
  var result = '';
  while (counter < s.length) {
    counter++;
    result += s[s.length - counter];
  }
  return result;
}
console.log(reverseStr('test'));
