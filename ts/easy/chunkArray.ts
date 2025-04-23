const chunkArray = function<T>(arr: T[], size: number): T[][] {
  const copy: T[] = [...arr];
  const result: T[][] = [];

  if (arr.length) {
      while(copy.length) {
        result.push(copy.splice(0,size))
      }
  }

  return result;
};
