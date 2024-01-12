class SquareGrid {
  int count;

  SquareGrid({required this.count});

  String paintGrid() {
    String result = '';
    for (int i = 1; i <= count; i++) {
      if (i % 2 == 0) {
        result += '# ' * count + '\n';
      } else {
        result += ' #' * count + '\n';
      }
    }
    return result;
  }
}
