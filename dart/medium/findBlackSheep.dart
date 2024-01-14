class FindBlackSheep {
  List<int> arr;

  FindBlackSheep({required this.arr});

  int get sheep {
    List<int> even = [];
    List<int> odd = [];
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        even.add(arr[i]);
      } else {
        odd.add(arr[i]);
      }
    }
    if (even.length > 1) {
      return odd[0];
    } else {
      return even[0];
    }
  }
}
