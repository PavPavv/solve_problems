class ReverseStr {
  static String result(String s) {
    String result = '';
    int counter = 0;

    while (counter < s.length) {
      counter++;
      result += s[s.length - counter];
    }
    return result;
  }
}
