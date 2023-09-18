function showAtIntervals(myInterval) {
  var counter = 0;
  var interval = setInterval(() => {
    if (counter <= 10) {
      console.log(t);
      counter++;
    } else {
      clearInterval(interval);
    }
  }, 1000 * myInterval);
}
showAtIntervals(1);
