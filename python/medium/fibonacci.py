def fib(n):
  if n < 2:
    return n
  cache = [0, 1]

  for i in range(2, n+1):
    cache.append(cache[i - 1] + cache[i - 2])
  return cache[n]
  
print(fib(0))
print(fib(9))
