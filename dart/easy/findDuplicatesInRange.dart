class FindDuplicatesInRange {
  static int result(List<int> arr, int l, int r, int target) {
    int counter = 0;
    var start = l < 0 ? 0 : l;
    var end = r < 0 ? 0 : r;

    if (start > end) {
      [start, end] = [end, start];
    }

    for (int i = start; i < end; i++) {
      if (arr[i] == target) {
        counter++;
      }
    }
    return counter;
  }
}
