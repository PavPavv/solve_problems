export const replaceAll = (str: string, target: string): string => {
  var s = '';
  if (str && target) {
    s = str.replace(new RegExp(target, 'gi'), '');
  }
  return s;
};
console.log(replaceAll('te#st##', '#'));
// O(n)
