function longestComPrefix(strArr) {
  var result = '';
  if (
    Array.isArray(strArr) &&
    strArr.length > 1 &&
    strArr.every((item) => typeof item === 'string')
  ) {
    var preparedArr = strArr.map((word) => word.trim().toLowerCase());
    var firstWord = preparedArr.shift(); //  not in the array anymore
    var counter = 0;

    while (counter <= firstWord.length) {
      var candidateChar = firstWord[counter];
      for (var word of preparedArr) {
        if (word[counter] !== candidateChar) {
          return result;
        }
      }
      result += candidateChar;
      counter++;
    }
  }
  return result;
}
console.log(longestComPrefix(['flower', 'flow', 'Flight']));
