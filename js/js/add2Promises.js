/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function(promise1, promise2) {
  const result = await Promise.all([promise1, promise2]);
  return result.reduce((a,b) => a + b, 0);
};


// addTwoPromises(Promise.resolve(2), Promise.resolve(2))
//   .then(console.log); // 4
