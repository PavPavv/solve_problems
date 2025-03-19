/*
  Currying is a technique in functional programming where a function with
  multiple arguments is transformed into a sequence of nested functions,
  each taking a single argument.
*/

function main() {
  function curry2(f: Function): Function {
    return function(a: number) {
      return function(b: number) {
        return f(a, b);
      }
    }
  }

  function curry3(f: Function): Function {
    return function(a: number) {
      return function(b: number) {
        return function(c: number) {
          return f(a, b, c);
        }
      }
    }
  }

  function curry(f: Function): Function {
    return function curried(...args: any[]) {
      if (args.length >= f.length) {  //  sum2 (a,b) and c(1,2,3,4,5,6)
        return f.apply(this, args);
      } else {
        return function(...args2: any[]) { //  sum2 (a,b) and c(1)
          const combinedArgs = [...args, ...args2];
          if (combinedArgs.length >= f.length) {
            return f.apply(this, combinedArgs);
          } else {
            return curried(...combinedArgs);
          }
        }
      }
    }
  }

  function sum2(a: number, b: number): number {
    return a + b;
  }

  function sum3(a: number, b: number, c: number): number {
    return a + b + c;
  }

  const carried2 = curry2(sum2);
  const result2 = carried2(1)(2);
  console.log(result2);

  const carried3 = curry3(sum2);
  const result3 = carried3(1)(2)(3);
  console.log(result3);

  const carried33 = curry3(sum3);
  const result33 = carried33(1)(2)(3);
  console.log(result33);

  const carried = curry(sum3);
  const result = carried(1)(9,9);
  console.log(result);
}
main();