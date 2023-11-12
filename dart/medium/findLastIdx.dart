class FindLastIdx {
  static Map<String, int> result(String str, String targetA, String targetB) {
    int a = str.lastIndexOf(targetA);
    int b = str.lastIndexOf(targetB);
    if (a >= b) {
      return {
        targetA: a,
      };
    } else if (a < b) {
      return {
        targetB: b,
      };
    }
    return {};
  }
}
