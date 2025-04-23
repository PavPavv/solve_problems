/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
  const timer = setTimeout(() => {
      fn(...args);
  }, t);
  return function () {
      clearTimeout(timer);
  }
};


var cancellable1 = function(fn, args, t) {
  const timeoutId = setTimeout(function() {
    fn.apply(null, args);
  }, t);

  const cancelFn = function() {
    clearTimeout(timeoutId);
  };

  return cancelFn;
};


var cancellable2 = function(fn, args, t) {
  fn(...args);
  const timeoutId = setInterval(function() {
      fn(...args);
  }, t);

  const cancelFn = function() {
      clearInterval(timeoutId);
  };

  return cancelFn;
};

/**
*  const result = [];
*
*  const fn = (x) => x * 2;
*  const args = [4], t = 35, cancelTimeMs = 190;
*
*  const start = performance.now();
*
*  const log = (...argsArr) => {
*      const diff = Math.floor(performance.now() - start);
*      result.push({"time": diff, "returned": fn(...argsArr)});
*  }
*       
*  const cancel = cancellable(log, args, t);
*
*  setTimeout(cancel, cancelTimeMs);
*   
*  setTimeout(() => {
*      console.log(result); // [
*                           //     {"time":0,"returned":8},
*                           //     {"time":35,"returned":8},
*                           //     {"time":70,"returned":8},
*                           //     {"time":105,"returned":8},
*                           //     {"time":140,"returned":8},
*                           //     {"time":175,"returned":8}
*                           // ]
*  }, cancelTimeMs + t + 15)    
*/