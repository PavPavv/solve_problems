class BuildEgyptTriangle {
  static String result(int n) {
    String cell = '#';
    String result = '';
    if (n < 1) {
      return result;
    }
    for (int i = 1; i <= n; i++) {
      result += cell * i + '\n';
    }
    return result;
  }
}
