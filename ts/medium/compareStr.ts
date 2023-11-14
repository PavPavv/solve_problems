export const nativeCompare = (a: string, b: string): string => {
  if (typeof a !== 'string' || typeof b !== 'string') return '';
  if (a.toLocaleUpperCase() <= b.toUpperCase()) {
    return a;
  } else {
    return b;
  }
};

console.log(nativeCompare('banana', 'avocado'));
console.log(nativeCompare('Banana', 'avocado'));
