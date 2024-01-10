export const generateTriangle = (): string => {
  const cell = '#';
  let result = '';
  for (let i = 1; i <= 7; i++) {
    result += cell.repeat(i) + '\n';
  }
  return result;
};
console.log(generateTriangle());
