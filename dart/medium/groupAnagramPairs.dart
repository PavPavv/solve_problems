class GroupAnagramPairs {
  static List<List<String>> result(List<String> words) {
    Map<String, List<String>> hash = {};

    for (String word in words) {
      final String sortedWord =
          String.fromCharCodes(word.runes.toList()..sort());
      if (hash.containsKey(sortedWord)) {
        hash[sortedWord]!.add(word);
      } else {
        hash[sortedWord] = [sortedWord];
      }
    }
    return hash.values.map((e) => e).toList();
  }
}
