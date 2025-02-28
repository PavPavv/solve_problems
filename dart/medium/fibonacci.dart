class Fibonacci {
  static int result(int n) {
    if (n == 1) return 0;
    if (n == 2) return 1;

    List<int> cache = [0, 1];

    for (int i = 3; i <= n; i++) {
      cache.add(cache[i - 2] + cache[i - 3]);
    }
    return cache[n - 1];
  }
}
