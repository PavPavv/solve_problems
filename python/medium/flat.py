from typing import List, Union

NestedNumberList = Union[int, List["NestedNumberList"]]

def flat(arr: NestedNumberList, n: int) -> List["NestedNumberList"]:
    if n == 0:
        return arr
    result = []

    if isinstance(arr, list):
        for item in arr:
            if isinstance(item, list):
                result.extend(flat(item, n - 1))
            else:
                result.append(item)
    else:
        result.append(arr)
    return result

print(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0))
print(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1))
print(flat([[1, 2], [3, [4, [5, [6]]], 7], [8, 9, 10]], 3))
