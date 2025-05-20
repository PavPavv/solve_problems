'use strict';

function main() {
    class Test {
    constructor(name) {
      this.name = name;
    }

    get testName() {
      return this.name;
    }

    addToName(str) {
      this.name += ` ${str}`;
      return this;
    }
  }

  const test = new Test('Jack');
  test.addToName('is').addToName('a good').addToName('boy');

  console.log(test.testName);

  class Calculator {
    constructor(value) {
      this.value = value;
    }

    add(num) {
      this.value += num;
      return this;
    }

    subtract(num) {
      this.value -= num;
      return this;
    }

    multiply(num) {
      this.value *= num;
      return this;
    }

    divide(num) {
      if (num === 0) throw Error('Division by zero is not allowed');
      this.value /= num;
      return this;
    }

    power(num) {
      this.value ** num;
      return this;
    }

    getResult() {
      return this.value;
    }
  }

  const first = new Calculator(10).add(5).subtract(7).getResult(); // 10 + 5 - 7 = 8
  console.log(first);

  const second = new Calculator(2).multiply(5).power(2).getResult(); // (2 * 5) ^ 2 = 100
  console.log(second);

  const third = new Calculator(20).divide(0).getResult(); // 20 / 0
  console.log(third);
}
main();