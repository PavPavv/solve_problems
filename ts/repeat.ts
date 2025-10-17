export const main = (): void => {
  // 1. binary search
  // function bSearch(arr: number[], target: number): number {
  //   const sortedArr = arr.sort((a: number, b: number) => a - b);
  //   let result = -1;
  //   let l = 0;
  //   let r = sortedArr.length - 1;

  //   while (l <= r) {
  //     const mid = Math.floor(( l+ r) / 2);
  //     const candidate = sortedArr[mid];
      
  //     if (candidate === target) {
  //       return result = mid;
  //     } else if (target < candidate) {
  //       r = mid - 1;
  //     } else {
  //       l = mid + 1;
  //     }
  //   }

  //   return result;
  // }
  // console.log(bSearch([2,3,4,5,6,7.7,8,9,10], 9));
  // console.log(bSearch([3,2,4,5,6,8,7,9,10], 9));
  // console.log(bSearch([2,3,4,5,6,7.7,8,9,10], -2));

  // 2. selection search
  // my
  type TArtist = {
    id: number;
    name: string;
    counter: number;
  }

  const DATA: TArtist[] = [
    {
      id: 1,
      name: 'Metallica',
      counter: 1000,
    },
    {
      id: 2,
      name: 'The White Stripes',
      counter: 99,
    },
    {
      id: 3,
      name: 'Limp Bizkit',
      counter: 700,
    },
    {
      id: 4,
      name: 'Norah Jones',
      counter: 7,
    },
    {
      id: 5,
      name: 'Kings Of Leon',
      counter: 999,
    },
  ];

  //console.log(DATA.sort((a, b) => a.counter - b.counter));

  const findMaxIdx = (nums: number[]): number => {
    if (!nums.length) return -1;

    let max = nums[0];
    let idx = 0;
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max) {
        idx = i;
      }
    }
    return idx;
  };

  const artistsSelectionSort = (data: TArtist[]): TArtist[] => {
    const copy: TArtist[] = [...data];
    const result: TArtist[] = [];
    
    for (let i = 0; i < data.length; i++) {
      const maxIdx = findMaxIdx(copy.map((artist: TArtist) => artist.counter));
      const targetArr = copy.splice(maxIdx, 1);
      if (targetArr.length) {
        result.push(targetArr[0]);
      }
    }

    return result;
  };
  console.log(artistsSelectionSort(DATA));
};
main();