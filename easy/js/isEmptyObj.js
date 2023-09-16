function isEmptyObj(obj) {
  return Object.keys(obj).length > 0 ? false : true;
}
console.log(isEmptyObj({}));
console.log(isEmptyObj({ name: 'Pav' }));
// O(n)
