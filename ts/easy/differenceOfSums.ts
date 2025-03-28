function differenceOfSums(n: number, m: number): number {
  const num1 = new Array(n)
                  .fill('')
                  .map((item, i) => item = i+1 )
                  .filter((num) => num % m !== 0)
                  .reduce((a, b) => a + b, 0);
  const num2 = new Array(n)
                  .fill('')
                  .map((item, i) => item = i+1 )
                  .filter((num) => num % m === 0)
                  .reduce((a, b) => a + b, 0);
  return num1 - num2;
};