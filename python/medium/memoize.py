def memoize(fn):
    cache = {}
    def inner(*args):
        if args in cache:
            return cache[args]
        result = fn(*args)
        cache[args] = result
        return result
    return inner

counter = 0

def traced_sum(*args):
    global counter
    counter += 1
    return sum(args)

memoized_fn = memoize(traced_sum)

memoized_fn(2,3)
memoized_fn(2,3)

print(counter)
