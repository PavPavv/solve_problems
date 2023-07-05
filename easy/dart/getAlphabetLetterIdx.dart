class GetAlphabetLetterIdx {
  static result(String letter) {
    String alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (alphabet.contains(letter)) {
      return alphabet.indexOf(letter) + 1;
    }
    return -1;
  }
}
