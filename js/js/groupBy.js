'use strict';

function main() {
  /**
   * @param {Function} fn
   * @return {Object}
   */
  Array.prototype.groupBy = function (fn) {
    const obj = {};
    for (let i = 0; i < this.length; i++) {
      const key = fn(this[i]);
      if (key in obj) {
        obj[key].push(this[i]);
      } else {
        obj[key] = [this[i]];
      }
    }
    return obj;
  };

  const result = [1, 2, 3].groupBy(String);
  console.log('result: ', result);

  const result1 = [{ id: '1' }, { id: '1' }, { id: '2' }].groupBy(
    (item) => item.id,
  );
  console.log('result1: ', result1);

  /**
   * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
   */
}
main();