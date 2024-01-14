function findBlackSheep(arr) {
  var even = [];
  var odd = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  if (even.length > 2) {
    return odd[0];
  } else {
    return even[0];
  }
}
console.log(findBlackSheep([2, 4, 6, 8, 9, 10, 12]));

function findBlackSheep1(arr) {
  var bArr = arr.map((x) => x % 2);
  var bSum = bArr.reduce((a, b) => a + b, 0);
  var targetBVal = bSum > 1 ? 0 : 1;
  var bSumValIdx = bArr.indexOf(targetBVal);
  return arr[bSumValIdx];
}
console.log(findBlackSheep1([2, 4, 6, 8, 9, 10, 12]));
