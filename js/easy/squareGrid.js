function grid(count) {
  var cell = '#';
  var s = '';
  for (var i = 0; i < count; i++) {
    if (i % 2 === 0) {
      var row = '';
      for (var j = 0; j < count; j++) {
        if (j % 2 === 0) {
          row += cell;
        } else {
          row += ' ';
        }
      }
      s += row + '\n';
    } else {
      var row = '';
      for (var k = 0; k < count; k++) {
        if (k % 2 === 0) {
          row += ' ';
        } else {
          row += cell;
        }
      }
      s += row + '\n';
    }
  }
  return s;
}
console.log(grid(8));
