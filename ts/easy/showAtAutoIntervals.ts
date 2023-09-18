export const showAtAutoIntervals = (myInterval: number) => {
  let counter = myInterval;
  const tick = 1000 * counter;

  var interval = setInterval(() => {
    if (counter <= 10) {
      console.log(counter);
      counter++;
      showAtAutoIntervals(counter);
    }
    clearInterval(interval);
    return;
  }, tick);
};
showAtAutoIntervals(1);
