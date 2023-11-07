export const count = (num: number) => {
  let counter = num || 0;
  return () => counter++;
};

const c1 = count(100);
c1();
c1();
c1();
c1();
c1();
const result = c1();
console.log(result);
