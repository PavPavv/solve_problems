function withSeparator() {
  var result = '';
  var args = Array.from(arguments);
  var separator = args[0];
  args.forEach((item, idx) => {
    if (idx > 0) {
      result += separator + item;
    }
  });
  return result;
}
console.log(withSeparator('!', 1, 2, 3, 4, 5));
// O(n-1)
