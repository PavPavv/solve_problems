const countdown = () => {
  let i = 10;
  const interval = setInterval(() => {
    if (i >= 0) {
      console.clear();
      console.log(i);
      i--;
    } else {
      clearInterval(interval);
      console.clear();
      console.log('Tah-dah!');
      return;
    }
  }, 500);
};
countdown();
