function findTargetElemByCount(arr, amount) {
  return arr.filter((item) => item.length === amount);
}
console.log(findTargetElemByCount(['Mark', 'John', 'Anna', 'Maria'], 4)); //  ['Mark', 'John', 'Anna']
// O(n)
