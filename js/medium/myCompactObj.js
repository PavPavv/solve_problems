'use strict';

function main() {
  function trimArr(arr) {
    return arr.filter((item) => Boolean(item));
  }
  console.log(trimArr([0, 0, 1, 0, 9])); // [1,9]
  console.log(trimArr([0, 0, 0, 0, 0])); // []

  function trimNestedArr(arr) {
    const acc = [];
    if (Array.isArray(arr)) {
      for (const item of arr) {
        if (Array.isArray(item)) {
          const trimmed = trimNestedArr(item);
          acc.push(trimNestedArr(item));
        } else {
          if (item) {
            acc.push(item);
          }
        }
      }
    } else {
      if (arr) {
        acc.push(arr);
      }
    }
    return acc;
  }
  console.log(
    trimNestedArr([
      0,
      0,
      [2, 2],
      [0, 0, 0],
      1,
      0,
      9,
      [0, [100, [0], [0, 120]]],
    ]),
  ); // [[2,2], [], 1, 9, [[100, [], [120]]]]

  function trimObj(obj) {
    const result = {};
    for (const key in obj) {
      if (obj[key]) {
        result[key] = obj[key];
      }
    }
    return result;
  }
  console.log(trimObj({ a: 0, b: 1 }));

  function trimNestedObj(obj) {
    const acc = {};
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        if (Array.isArray(obj[key])) {
          // handle array here
          acc[key] = trimNestedArr(trimArr(obj[key]));
        } else {
          // handle object here
          const trimmedObj = trimNestedObj(trimObj(obj[key]));
          if (Object.keys(trimmedObj).length) {
            acc[key] = trimNestedObj(trimObj(obj[key]));
          }
        }
      } else {
        // handle primitive key value here
        if (obj[key]) {
          acc[key] = obj[key];
        }
      }
    }
    return acc;
  }
  console.log(trimNestedObj({ a: undefined, b: 1, c: { d: null, e: 2 } })); //  { b: 1, c: { e: 2 } };
  console.log(
    trimNestedObj({
      a: undefined,
      b: 1,
      c: { d: null, e: 2 },
      f: [false, 1000],
    }),
  ); //  { b: 1, c: { e: 2 }, f: [1000] };
  console.log(
    trimNestedObj({
      a: undefined,
      b: 1,
      c: { d: null, e: 2 },
      f: [false, 1000],
      g: {
        h: false,
        i: {
          k: [false, false, false],
          l: [undefined, 4000],
        },
      },
    }),
  ); //  { b: 1, c: { e: 2 }, f: [1000], g: { i: { k: [], l: [4000] } } };

  function compactObject(obj) {
    // main control where we have to recognize  whether 'obj' itself is object or array
    if (obj && typeof obj === 'object') {
      if (Array.isArray(obj)) {
        return trimNestedArr(obj);
      } else {
        return trimNestedObj(obj);
      }
    }
    return [];
  }

  console.log(
    compactObject([
      0,
      0,
      [2, 2],
      [0, 0, 0],
      1,
      0,
      9,
      [0, [100, [0], [0, 120]]],
    ]),
  );
  console.log(
    compactObject({
      a: undefined,
      b: 1,
      c: { d: null, e: 2 },
      f: [false, 1000],
      g: {
        h: false,
        i: {
          k: [false, false, false],
          l: [undefined, 4000],
        },
      },
    }),
  );
  console.log(compactObject({ a: undefined, b: 1, c: { d: null, e: 2 } }));
  console.log(compactObject({ a: null, b: [false, 1] }));
  console.log(compactObject({}));
}
main();
