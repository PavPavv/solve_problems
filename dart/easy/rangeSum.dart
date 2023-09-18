class RangeSum {
  static int result(int a, int b) {
    int result = 0;
    int start = a > b ? b : a;
    int end = a < b ? b : a;

    for (int i = start; i <= end; i++) {
      result += i;
    }
    return result;
  }
}
