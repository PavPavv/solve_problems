class CheckBracketsSimple {
  static bool result(String s, String pattern) {
    List<String> stack = [];

    for (int i = 0; i < s.length; i++) {
      String item = s[i];
      if (item == pattern) {
        stack.add(item);
      } else {
        if (stack.isEmpty) {
          return false;
        } else {
          stack.removeLast();
        }
      }
    }
    return stack.isEmpty ? true : false;
  }
}
