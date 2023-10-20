import 'dart:math';

class FindFirstAndSecondMax {
  static List<int> result(List<int> arr) {
    if (arr.length < 2) {
      return [];
    }

    var max1 = max(arr[0], arr[1]);
    var max2 = min(arr[0], arr[1]);

    for (int i = 2; i < arr.length; i++) {
      if (arr[i] > max1) {
        max2 = max1;
        max1 = arr[i];
      } else if (arr[i] < max1 && arr[i] > max2) {
        max2 = arr[i];
      }
    }
    return [max1, max2];
  }
}
