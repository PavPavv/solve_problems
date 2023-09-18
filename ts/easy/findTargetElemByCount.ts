export const findTargetElemByCount = (
  arr: string[],
  target: number,
): string | undefined => {
  return arr.find((item) => item.length === target);
};
console.log(findTargetElemByCount(['Mark', 'John', 'Anna', 'Maria'], 5)); //  ['Mark', 'John', 'Anna']
// O(n)
