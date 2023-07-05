class FindTargetElemByCount {
  static String result(List<String> arr, int amount) {
    var result = arr.where((item) => item.length == amount);
    if (result.length > 0) {
      return result.elementAt(0);
    } else {
      return 'nothing found';
    }
  }
}
// O(n)