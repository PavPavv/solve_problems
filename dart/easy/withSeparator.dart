class WithSeparator {
  static String result(String separator, List<int> args) {
    String result = '';
    args.forEach((element) {
      result += separator + '$element';
    });
    return result;
  }
}
