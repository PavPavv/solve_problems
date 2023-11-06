class FindMinEven {
  static int result(List<int> arr) {
    int min = 0;

    for (int i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        if (arr[i] < min) {
          min = arr[i];
        }
      }
    }
    return min;
  }
}
