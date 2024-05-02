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
