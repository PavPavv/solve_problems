class ClosureCounter {
  static result(int number) {
    var counter = number;
    return () {
      counter++;
      return counter;
    };
  }
}
