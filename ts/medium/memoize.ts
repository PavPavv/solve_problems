function memoize(fn: Function): Function {
  const cache: Record<string, string> = {};
  
  return function(...args: any) {
    const candidateKey = JSON.stringify(args);
    if (cache.hasOwnProperty(candidateKey)) {
      return cache[candidateKey];
    } else {
      cache[candidateKey] = fn(...args);
      return cache[candidateKey];
    }
  }
}

let callCount = 0;

const memoizedFn = memoize(function (a: any, b: any) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 