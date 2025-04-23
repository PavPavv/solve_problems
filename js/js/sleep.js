/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return await new Promise((res) => {
    setTimeout(() => {
      res();
    }, millis)
  });
}

const t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100