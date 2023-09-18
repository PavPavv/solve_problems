class CountVowels {
  static int result(String word) {
    List<String> VOWELS = ['a', 'e', 'i', 'o', 'u'];
    int counter = 0;

    for (int i = 0; i < word.length; i++) {
      if (VOWELS.contains(word[i])) {
        counter++;
      }
    }
    return counter;
  }
}
