class UniqueSums {
  static List<List<int>> result(List<int> arr, int target) {
    Map<int, int> map = {};
    List<List<int>> result = [];

    for (int i = 0; i < arr.length; i++) {
      map[arr[i]] = arr[i];
    }

    for (MapEntry e in map.entries) {
      int n = e.key;
      int secondNum = target - n;
      if (map.containsKey(n) && secondNum > n) {
        result.add([n, secondNum]);
      }
    }

    return result;
  }
}
