// x > 1, f = (x - 1) + (x - 2)
// 0,1,1,2,3,5,8,13,21,34...

export const fib = (num: number): number => {
  if (num < 2) return num;
  const cache = [0, 1];

  for (let i = 2; i <= num; i++) {
    const a = cache[i - 1];
    const b = cache[i - 2];
    cache.push(a + b);
  }
  return cache[num];
};
console.log(fib(0)); //  0
console.log(fib(1)); //  1
console.log(fib(2)); //  1
console.log(fib(3)); //  2
console.log(fib(4)); //  3
console.log(fib(5)); //  5
console.log(fib(6)); //  8
console.log(fib(7)); //  13
console.log(fib(8)); //  21
console.log(fib(9)); //  34
