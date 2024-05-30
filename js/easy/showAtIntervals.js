function showAtIntervals(myInterval) {
  var counter = 0;
  var interval = setInterval(() => {
    if (counter <= 10) {
      counter++;
    } else {
      clearInterval(interval);
    }
  }, 1000 * myInterval);
}
showAtIntervals(1);
