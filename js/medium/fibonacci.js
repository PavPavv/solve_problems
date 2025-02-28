// x > 1, f = (x - 1) + (x - 2)
// 0,1,1,2,3,5,8,13,21,34...

function fib(num) {
  if (num === 1) return 0;
  if (num > 1 && num <= 3) return 1;
  return fib(num - 2) + fib(num - 1);
}
console.log(fib(1)); //  0
console.log(fib(2)); //  1
console.log(fib(3)); //  1
console.log(fib(4)); //  2
console.log(fib(5)); //  3
console.log(fib(6)); //  5
console.log(fib(7)); //  8
console.log(fib(8)); //  13
console.log(fib(9)); //  21
console.log(fib(10)); //  34
