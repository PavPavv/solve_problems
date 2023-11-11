class CalcChars {
  static String result(String s) {
    Map<String, int> map = {};
    String result = '';

    for (int i = 0; i < s.length; i++) {
      if (map.containsKey(s[i])) {
        map[s[i]] = map[s[i]]! + 1;
      } else {
        map[s[i]] = 1;
      }
    }

    for (MapEntry e in map.entries) {
      result += '${e.key + e.value.toString()}';
    }

    return result;
  }
}
