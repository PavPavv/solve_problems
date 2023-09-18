const str = 'What a beautiful day!';

export const getShortestStr = (str: string): string => {
  var arr: string[] = str.split(' ');
  var min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < min.length) {
      min = arr[i];
    }
  }
  return min;
};
console.log(getShortestStr(str));
