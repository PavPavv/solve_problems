class FindPopularChar {
  static String result(String s) {
    Map<String, int> map = {};
    int min = 0;
    String result = '';

    for (int i = 0; i < s.length; i++) {
      if (map.containsKey(s[i])) {
        map[s[i]] = map[s[i]]! + 1;
      } else {
        map[s[i]] = 1;
      }
    }

    for (MapEntry e in map.entries) {
      if (e.value > min) {
        min = e.value;
        result = e.key;
      }
    }

    return result;
  }
}
