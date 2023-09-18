function replaceAll(str, target) {
  var s = '';
  if (str && target) {
    s = str.replaceAll(target, '');
  }
  return s;
}
console.log(replaceAll('te#st', '#'));
// O(n)
