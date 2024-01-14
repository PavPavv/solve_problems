'use strict';
const o1 = {
  name: 'Pav',
};

const o2 = {};

const result = o2.name;
console.log(result); //  undefined

//////////////////////////////////////////////

// 1
const o22 = {};
o22.__proto__ = o1;
const result2 = o21.name;
console.log(result2);

// 2
const o21 = Object.create(o1);
const result1 = o21.name;
console.log(result1);

// 3
const o23 = Object.assign(o1);
const result3 = o23.name;
console.log(result3);

// 4
const o24 = {};
Object.setPrototypeOf(o24, o1);
const result4 = o24.name;
console.log(result4);

// 5
Object.prototype.pav = function () {
  return 'Pav';
};
console.log(Object.pav());

// + ES5 function constructors and ES6 classes methods prototyping
