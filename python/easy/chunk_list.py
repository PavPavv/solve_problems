from typing import List

def chunk_list(l: List[int], size: int) -> List[List[int]]:
    copy = l[:]
    result = []
    if len(l):
        while len(copy):
            result.append(copy[0:size])
            del copy[0:size]
    return result
print(chunk_list([1,2,3,4,5,6,7,8,9], 3))
