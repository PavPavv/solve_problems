const findMaxIdx = (
  str: string,
  targetA: string,
  targetB: string,
): Record<string, number> => {
  const a = str.lastIndexOf(targetA);
  const b = str.lastIndexOf(targetB);
  if (a >= b) {
    return {
      [targetA]: str.lastIndexOf(targetA),
    };
  } else if (a < b) {
    return {
      [targetB]: str.lastIndexOf(targetB),
    };
  }
  return {};
};
console.log(findMaxIdx('abbaao', 'a', 'b'));

const myLastIndexOf = (str: string, target: string): number => {
  let result = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      result = i;
    }
  }
  return result;
};

const customFindMaxIdx = (str: string, targetA: string, targetB: string) => {
  const a = myLastIndexOf(str, targetA);
  const b = myLastIndexOf(str, targetB);
  if (a >= b) {
    return {
      [targetA]: myLastIndexOf(str, targetA),
    };
  } else if (a < b) {
    return {
      [targetB]: myLastIndexOf(str, targetB),
    };
  }
  return {};
};
console.log(customFindMaxIdx('abbaao', 'a', 'b'));
