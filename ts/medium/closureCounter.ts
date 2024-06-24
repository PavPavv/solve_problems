export const count = (num: number): () => number => {
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

const c2 = (function (num = 0) {
  let counter = num;
  return () => counter++;
})(100);

c2();
c2();
c2();
c2();
c2();
const result2 = c2();
console.log(result2);
