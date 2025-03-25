def no_if_no_ternary(a: int, b: int) -> str:
    res = 0
    res += int(a > b)
    res += int(a == b and 2) + 1
    
    result = {
        1: "a is smaller than b",
        2: "a is greater than b",
        3: "a is equal to b",
    }
    return result[res]
    
print(no_if_no_ternary(-4,-7))
print(no_if_no_ternary(2,3))
print(no_if_no_ternary(2,2))
