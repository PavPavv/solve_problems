class LongestCommonPrefixSimple {
  List<String> arr;

  LongestCommonPrefixSimple({required this.arr});

  String getPrefix() {
    String result = '';

    if (!arr.isEmpty && arr.length > 1) {
      List<String> preparedArr =
          arr.map((String item) => item.toLowerCase()).toList();
      String firstWord = preparedArr[0];
      preparedArr.removeAt(0);
      int counter = 0;

      while (counter < firstWord.length) {
        String candidate = firstWord[counter];

        for (int i = 0; i < preparedArr.length; i++) {
          if (preparedArr[i][counter] != candidate) {
            return result;
          }
        }
        result += candidate;
        counter++;
      }
    }

    return result;
  }
}
