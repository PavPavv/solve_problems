class CompareStr {
  static String result(String a, String b) {
    int result = a.toUpperCase().compareTo(b.toUpperCase());
    if (result <= 0) {
      return a;
    } else {
      return b;
    }
  }
}
