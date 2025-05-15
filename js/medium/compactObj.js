function main() {
    function compactObject(obj) {
    if (Array.isArray(obj)) {
      return obj.map(compactObject).filter(Boolean);
    } else if (obj !== null && typeof obj === 'object') {
      const result = {};
      for (const key in obj) {
        const value = obj[key];
        if (Boolean(value)) {
          const compactedValue = compactObject(value);
          if (
            (typeof compactedValue === 'object' &&
              compactedValue !== null &&
              Object.keys(compactedValue).length) ||
            (Array.isArray(compactedValue) && compactedValue.length) ||
            typeof compactedValue !== 'object'
          ) {
            result[key] = compactedValue;
          }
        }
      }
      return result;
    } else {
      return obj;
    }
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