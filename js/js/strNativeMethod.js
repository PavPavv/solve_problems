//  'Hello'.repeating(3) -> 'Hello Hello Hello'

String.prototype.repeating = function (num) {
  return new Array(num).fill(this).join(' ');
};

console.log('test'.repeating(3));
