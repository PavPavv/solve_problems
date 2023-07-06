class RemoveVowels {
  static String result(String str) {
    return str.replaceAll(RegExp(r'[aeiouAEIOU]'), '');
  }
}
