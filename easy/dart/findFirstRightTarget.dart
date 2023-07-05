class FindFirstRightTarget {
  // O(n-k)
  static List<int> result(List<int> arr, int target) {
    List<int> result = [-1, -1];
    for (int i = arr.length - 1; i > 0; i--) {
      if (arr[i] == target) {
        result[0] = i;
        result[1] = arr[i];
        break;
      }
    }
    return result;
  }
}
