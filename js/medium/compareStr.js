function compare(strA, strB) {
  if (strA <= strB) {
    return strA;
  } else {
    return strB;
  }
}
console.log(compare('banana', 'avocado')); //  'avocado'

function compare1(strA, strB) {
  var result = strA.localeCompare(strB, {
    ignorePunctuation: true,
    sensitivity: 'base',
  });
  return result > 0 ? strB : strA;
}
console.log(compare1('banana', 'avocado')); //  'avocado'
console.log(compare1('Banana', 'avocado')); //  avocado
