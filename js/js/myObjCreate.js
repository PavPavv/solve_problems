'use strict';
const objTest = {
  name: 'Pav',
};

Object.prototype.myCreate = function (obj) {
  return ({}.__proto__ = obj);
};

const o1 = Object.myCreate(objTest);
console.log(o1);
const result1 = o1.name;
console.log(result1);

Object.prototype.myCreate1 = function (obj) {
  function F() {}
  F.prototype = obj;
  return new F();
};

const o2 = Object.myCreate1(objTest);
console.log(o2);
const result2 = o2.name;
console.log(result2);
