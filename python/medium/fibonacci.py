def fib_r(n=1):
    if not isinstance(n, int):
        return 0
    if n < 2:
        return n
    return fib_r(n - 1) + fib_r(n - 2)
print(fib_r(0)) # 0
print(fib_r(1)) # 1
print(fib_r(2)) # 1
print(fib_r(3)) # 2
print(fib_r(4)) # 3
print(fib_r(5)) # 5
print(fib_r(6)) # 8
print(fib_r(7)) # 13
print(fib_r(8)) # 21

def fib(n):
    cache = [0, 1]
    if n < 2:
        return cache[n]

    for i in range(2, n+1):
        cache.append(cache[i - 1] + cache[i - 2])
    return cache[n]
print(fib(0)) # 0
print(fib(1)) # 1
print(fib(2)) # 1
print(fib(3)) # 2
print(fib(4)) # 3
print(fib(5)) # 5
print(fib(6)) # 8
print(fib(7)) # 13
print(fib(8)) # 21

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
            cache = [0, 1]
            if self.n < 2:
                return cache[self.n]
        for item in range(2, self.n+1):
            cache.append(cache[item - 1] + cache[item - 2])
        return cache[self.n]
newFib = Fib(0)
result_1 = newFib.fib_1()
print(result_1)

newFib2 = Fib(1)
result_2 = newFib2.fib_1()
print(result_2)

newFib3 = Fib(2)
result_3 = newFib3.fib_1()
print(result_3)

newFib4 = Fib(3)
result_4 = newFib4.fib_1()
print(result_4)

newFib5 = Fib(4)
result_5 = newFib5.fib_1()
print(result_5)

newFib6 = Fib(5)
result_6 = newFib6.fib_1()
print(result_6)

newFib7 = Fib(6)
result_7 = newFib7.fib_1()
print(result_7)

newFib8 = Fib(7)
result_8 = newFib8.fib_1()
print(result_8)

newFib9 = Fib(8)
result_9 = newFib9.fib_1()
print(result_9)






