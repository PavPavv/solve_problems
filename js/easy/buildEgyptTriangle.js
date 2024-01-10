function print(val) {
  console.log(val);
}

function generateTriangle() {
  var cell = '#';
  var result = '';
  for (var i = 1; i <= 7; i++) {
    result += cell.repeat(i) + '\n';
  }
  print(result);
}

function main() {
  generateTriangle();
}
main();
