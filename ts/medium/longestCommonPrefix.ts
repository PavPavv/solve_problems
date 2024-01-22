export const longestComPrefix = (strArr: string[]): string => {
  let result = '';
  if (
    Array.isArray(strArr) &&
    strArr.length > 1 &&
    strArr.every((item) => typeof item === 'string')
  ) {
    const preparedArr: string[] = strArr.map((word) =>
      word.trim().toLowerCase(),
    );
    const firstWord: string = preparedArr.shift()!; //  not in the array anymore
    let counter = 0;

    while (counter <= firstWord.length) {
      let candidateChar = firstWord[counter];
      for (const word of preparedArr) {
        if (word[counter] !== candidateChar) {
          return result;
        }
      }
      result += candidateChar;
      counter++;
    }
  }
  return result;
};
console.log(longestComPrefix(['flower', 'flow', 'Flight']));
