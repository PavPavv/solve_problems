var str = 'What a beautiful day!';

function getShortestStr(str) {
  var arr = str.split(' ');
  var min = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i].length < min.length) {
      min = arr[i];
    }
  }
  return min;
}
console.log(getShortestStr(str));
