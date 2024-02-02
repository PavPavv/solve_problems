export const longestCommonPrefixSimple = (strArr: string[]): string => {
  let result = '';
  if (
    Array.isArray(strArr) &&
    strArr.length > 1 &&
    strArr.every((item) => typeof item === 'string')
  ) {
    const preparedArr: string[] = strArr.map((word) =>
      word.trim().toLowerCase(),
    );
    // we assume that first word in the array 100% had the same root as other words
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
console.log(longestCommonPrefixSimple(['flower', 'flow', 'Flight']));
