function findMiddleNumInStr(str: any): number  {
  if (typeof str !== 'string') return -1;

  const isNumbersPresent = str.split('').some(Number);
  if (!isNumbersPresent) {
    return -1;
  }

  const result = str.replace(/\s/g, '')
    .split('')
    .filter((char) => {
        if (!Number.isNaN(Number(char))) {
            return char;
        }
        return '';
    })
    .map(Number)
    .reduce((a, b) => (a * b), 1).toString()
    .split('');


  if (result.length % 2 === 0) {
    const first = String(result[Math.floor(result.length / 2) - 1]);
    const second = String(result[Math.floor(result.length / 2)]);
    return first ? Number(first + second) : Number(second);
  } else {
    return Number(result[Math.floor(result.length / 2)]);
  }
}
console.log(findMiddleNumInStr('s7d8jd9'))  //  0
console.log(findMiddleNumInStr('58jd9fgh/fgh6s.,sdf'))  //  16
console.log(findMiddleNumInStr(null))   //  -1
console.log(findMiddleNumInStr([1,2,3]));   //  -1
// O(n)

function findMiddle(str: string): number {
  if (typeof str != 'string' || !/\d/.test(str))
    return -1;
  const s = Array
    .from(str.replace(/\D/g, ''))
    .map(Number)
    .reduce((x, y) => x * y)
    .toString();
  return +s.slice(Math.ceil(s.length / 2 - 1), Math.floor(s.length / 2 + 1));
}