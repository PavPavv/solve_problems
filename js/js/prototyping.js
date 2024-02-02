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
const result2 = o22.name;
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

// 6
// Parent constructor
function Animal(aName) {
  this.aName = aName;
}

// Child constructor
function Dog(aName) {
  // sort of super stuff from ES6
  // bind parent constructor
  // Call the parent constructor with the child instance as 'this'
  Animal.call(this, aName);
}
// Inherit from the parent prototype
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.getName = function () {
  return this.aName;
};

var jack = new Dog('Jack');
console.log(jack.aName);
console.log(jack.getName());

// 7

class Person {
  constructor() {
    this.metaData = 'Hi, I am parent meta data';
  }
}

class Girl extends Person {
  constructor(girlName) {
    super();
    this.girlName = girlName;
  }

  getGirlsName() {
    return this.girlName;
  }

  getParentMeta() {
    return this.metaData;
  }
}

const ann = new Girl('Ann');
console.log(ann.getGirlsName());
console.log(ann.getParentMeta());
