cache = [0,1]

def dfib(n):
    if n >= len(cache):
        new_elem = dfib(n-1) + dfib(n-2)
        cache.append(new_elem)
    return cache[n]
    
print(dfib(1)) # 0
print(dfib(2)) # 1
print(dfib(3)) # 1
print(dfib(4)) # 2
print(dfib(5)) # 3
print(dfib(6)) # 5
print(dfib(7)) # 8
print(dfib(8)) # 13
print(dfib(9)) # 21

