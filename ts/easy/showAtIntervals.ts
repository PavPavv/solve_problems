export const showAtIntervals = (myInterval: number): void => {
  let t = 0;
  const interval = setInterval(() => {
    if (t <= 10) {
      console.log(t);
      t++;
    } else {
      void clearInterval(interval);
    }
  }, 1000 * myInterval);
};
showAtIntervals(1);
