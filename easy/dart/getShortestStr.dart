class GetShortestStr {
  static String result(String str) {
    List<String> list = str.split(' ');
    String min = list[0];

    for (int i = 1; i < list.length; i++) {
      if (list[i].length < min.length) {
        min = list[i];
      }
    }
    return min;
  }
}
