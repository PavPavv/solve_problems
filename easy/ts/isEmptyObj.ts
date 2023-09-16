export const isEmptyObj = (obj: { [key: string]: any }) => {
  for (const key in obj) {
    if (key) return false;
  }
  return true;
};
console.log(isEmptyObj({}));
console.log(isEmptyObj({ name: 'Pav' }));
