export const grid = (count: number, cellChar = '#' as string): string => {
  let result = '';
  for (let i = 0; i < count; i++) {
    if (i % 2 === 0) {
      let row = '';
      for (let j = 0; j < count; j++) {
        if (j % 2 === 0) {
          row += cellChar;
        } else {
          row += ' ';
        }
      }
      result += row + '\n';
    } else {
      let row = '';
      for (let k = 0; k < count; k++) {
        if (k % 2 === 0) {
          row += ' ';
        } else {
          row += cellChar;
        }
      }
      result += row + '\n';
    }
  }
  return result;
};
console.log(grid(8));
