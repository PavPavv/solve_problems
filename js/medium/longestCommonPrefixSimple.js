function longestCommonPrefixSimple(strArr) {
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
//	will not work
console.log(longestCommonPrefixSimple(['redu', 'flower', 'flow', 'Flight']));
//	will work
console.log(longestCommonPrefixSimple(['flower', 'flow', 'Flight']));
