const main = (): void => {
  const badSearch = (arr: number[], target: number): number => {
    const sortedArr = arr.sort((a, b) => a - b);
    let l = 0;
    let r = sortedArr.length - 1;

    while (l <= r) {
    let middle = Math.floor((l + r) / 2);

      if (sortedArr[middle] === target) {
        return middle;
      } else if (sortedArr[middle] > target) {
        r = middle - 1;
      } else {
        l = middle + 1;
      }
    }
    return -1;
  };
  //console.log(badSearch([2,3,4,5,6,7,8,9,10], 9),'- First');
  //console.log(badSearch([2,3,4,5,6,7,8,9,10], 3), '- Second');

    const bSearch = (arr: number[], target: number): number => {
      const sortedArr = arr.sort((a, b) => a - b);
      let l = 0;
      let r = sortedArr.length - 1;
      let result = -1;

      while (l <= r) {
        let middle = Math.floor((l + r) / 2);
        let guess = sortedArr[middle];

        if (guess === target) {
          return result = middle;
        } else if (guess > target) {
          r = middle - 1;
        } else {
          l = middle + 1;
        }
      }
      return result;
    };
    //console.log(bSearch([2,3,4,5,6,7,8,9,10], 9),'- First'); // 7
    //console.log(bSearch([2,3,4,5,6,7,8,9,10], 0), '- Second'); // -1
};
main();