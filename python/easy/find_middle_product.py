import math
from functools import reduce

def find_middle_procuct(s):
    if not isinstance(s, str):
        return -1
        
    result_l = []
    for char in s:
        if char.isdigit():
            result_l.append(int(char))
    if not len(result_l):
        return -1
    
    new_l = list(str(reduce(lambda x, y: x*y, map(int, result_l))))

    if len(new_l) % 2 == 0:
        first = new_l[math.floor(len(new_l) / 2) - 1]
        second = new_l[math.floor(len(new_l) / 2)]
        if first != "0":
            return int(str(first_num) + str(second_num))
        else:
            return second_num
    else:
        return new_l[math.floor(len(new_l) / 2)]
print(find_middle_procuct("s7d8jd9"))
print(find_middle_procuct("~#zxr,pml=%*tl(fknzs>(|%#f#, ="))

