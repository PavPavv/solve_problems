from typing import List, Union

NestedNumberList = Union[int, List["NestedNumberList"]]

l = [1,2,3, [4,5,6]]

def my_flat(arr: NestedNumberList) -> List[int]:
    acc = []
    
    if isinstance(arr, list):
        for item in arr:
            acc.extend(my_flat(item))
    else:
        acc.append(arr)
    return acc
print(my_flat(l))
