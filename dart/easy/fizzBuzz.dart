class FizzBuzz {
  int count;

  FizzBuzz({required this.count});

  int get fizzBuzzCount {
    return count;
  }

  List<String> fb() {
    List<String> arr = [];
    for (int i = 1; i <= count; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        arr.add('FizzBuzz');
      } else if (i % 5 == 0) {
        arr.add('Buzz');
      } else if (i % 3 == 0) {
        arr.add('Fizz');
      } else {
        arr.add(i.toString());
      }
    }
    return arr;
  }
}
