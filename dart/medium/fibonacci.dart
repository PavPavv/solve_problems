class Fibonacci {
  static int result(int n) {
    if (n < 2) {
      return n;
    }
    List<int> cache = [0, 1];
    for (int i = 2; i <= n; i++) {
      cache.add(cache[i - 1] + cache[i - 2]);
    }
    return cache[n];
  }
}
