String.prototype.myReverse = function () {
  var result = '';
  var counter = 0;

  while (counter < this.length) {
    counter++;
    result += this[this.length - counter];
  }

  return result;
};

var t = 'test'.myReverse();

console.log(t);
