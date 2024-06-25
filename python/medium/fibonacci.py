def fib_r(n=0):
  if not isinstance(n, int):
    return 0
  if n < 2:
    return n
  return fib(n - 2) + fib(n - 1)
print(fib_r(9))

def fib(n):
  if n < 2:
    return n
  cache = [0, 1]

  for i in range(2, n+1):
    cache.append(cache[i - 1] + cache[i - 2])
  return cache[n]
  
print(fib(0))
print(fib(9))

class Fib():
  def __init__(self, n=0):
    self.n = n

  def check_n(self):
    if not isinstance(self.n, int):
      return False
    else:
      return True

  def fib_1(self):
    if self.check_n():
      if self.n < 2:
        return self.n
      cache = [0, 1]
      for item in range(2, self.n + 1):
        cache.append(cache[item - 1] + cache[item - 2])
      return cache[self.n]
    return 0


fib_1 = Fib(9)
result_1 = fib_1.fib_1()
print(result_1)
