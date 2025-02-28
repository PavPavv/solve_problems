def fib_r(n=1):
    if not isinstance(n, int):
        return 0
    if n == 1:
        return 0
    if n > 1 and n <= 3:
        return 1
    return fib_r(n - 2) + fib_r(n - 1)
print(fib_r(1)) # 0
print(fib_r(2)) # 1
print(fib_r(3)) # 1
print(fib_r(4)) # 2
print(fib_r(5)) # 3
print(fib_r(6)) # 5
print(fib_r(7)) # 8
print(fib_r(8)) # 13
print(fib_r(9)) # 21

def fib(n):
    if n == 1:
        return 0
    if n == 2:
        return 1
    cache = [0, 1]

    for i in range(3, n+1):
        cache.append(cache[i - 2] + cache[i - 3])
    return cache[n - 1]
print(fib(1)) # 0
print(fib(2)) # 1
print(fib(3)) # 1
print(fib(4)) # 2
print(fib(5)) # 3
print(fib(6)) # 5
print(fib(7)) # 8
print(fib(8)) # 13
print(fib(9)) # 21

class Fib():
    def __init__(self, n=1):
        self.n = n

    def check_n(self):
        if not isinstance(self.n, int):
            return False
        else:
            return True

    def fib_1(self):
        if self.check_n():
            if self.n == 1:
                return 0
            if self.n == 2:
                return 1
        cache = [0, 1]
        for item in range(3, self.n + 1):
            cache.append(cache[item - 2] + cache[item - 3])
        return cache[self.n - 1]
newFib = Fib(1)
result_1 = newFib.fib_1()
print(result_1)

newFib2 = Fib(2)
result_2 = newFib2.fib_1()
print(result_2)

newFib3 = Fib(3)
result_3 = newFib3.fib_1()
print(result_3)

newFib4 = Fib(4)
result_4 = newFib4.fib_1()
print(result_4)

newFib5 = Fib(5)
result_5 = newFib5.fib_1()
print(result_5)

newFib6 = Fib(6)
result_6 = newFib6.fib_1()
print(result_6)

newFib7 = Fib(7)
result_7 = newFib7.fib_1()
print(result_7)

newFib8 = Fib(8)
result_8 = newFib8.fib_1()
print(result_8)

newFib9 = Fib(9)
result_9 = newFib9.fib_1()
print(result_9)






