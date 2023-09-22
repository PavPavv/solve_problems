class CheckBrackets {
  static bool result(String s) {
    if (s.trim().isEmpty) {
      return false;
    }
    List<String> open = ['(', '[', '{'];
    List<String> close = [')', ']', '}'];
    List<String> stack = [];

    for (int i = 0; i < s.length; i++) {
      final String item = s[i];
      if (open.contains(item)) {
        stack.add(item);
      } else if (close.contains(item)) {
        final int openPos = close.indexOf(item);
        if (stack.length > 0 && open[openPos] == stack[stack.length - 1]) {
          stack.removeLast();
        } else {
          return false;
        }
      }
    }
    return stack.isEmpty ? true : false;
  }
}
