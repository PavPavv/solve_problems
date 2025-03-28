from typing import List

def bubble_sort(l: List[int]) -> List[int]:
    a = l[:]
    is_finish = False

    while not is_finish:
        for i in range(1, len(a)):
            prev = a[i-1]
            current = a[i]
            if prev > current:
                a[i-1] = current
                a[i] = prev
            elif current == len(a) - 1 and prev < current:
                is_finish = True
    return a
        
print(bubble_sort([3,1,4,2]))
