class FindDuplicates {
  static List<int> result(List<int> arr) {
    Map<int, int> hashTable = {};
    List<int> result = [];

    for (int i = 0; i < arr.length; i++) {
      if (hashTable.containsKey(arr[i])) {
        hashTable[arr[i]] = hashTable[arr[i]]! + 1;
      } else {
        hashTable[arr[i]] = 1;
      }
    }

    hashTable.forEach((key, value) {
      if (value > 1) {
        result.add(key);
      }
    });
    return result;
  }
}
