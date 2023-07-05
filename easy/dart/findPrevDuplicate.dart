class FindPrevDuplicate {
  static bool result(List<int> arr) {
    for (int i = 1; i < arr.length; i++) {
      var prev = arr[i - 1];
      if (prev == arr[i]) {
        return true;
      }
    }
    return false;
  }
}
