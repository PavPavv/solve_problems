""""
Currying is a functional programming technique in which a function is
transformed into a sequence of functions, each taking a single argument.
In Python, currying can be implemented using nested functions or through the
use of decorators and tools from libraries like functools.
"""

def sum_3(a: int,b: int,c: int) -> int:
    return a + b + c

def simple_curry(fn):
    def aFn(a):
        def bFn(b):
            def cFn(c):
                return fn(a,b,c)
            return cFn
        return bFn
    return aFn
curried = simple_curry(sum_3)
result = curried(1)(2)(3)
print(result)

def curry(fn):
    def curried(*args):
        if len(args) == fn.__code__.co_argcount:
            return fn(*args)
        return lambda *args2: curried(*args, *args2)
    return curried

@curry
def sum_3_c(a,b,c):
    return a + b + c
curried_1 = sum_3_c
result_1 = curried_1(1)(2)(3)
print(result_1)
