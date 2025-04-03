from typing import List

def transform_array(nums: List[int]) -> List[int]:
    even = 0
    odd = 0
    for num in nums:
        if num % 2 == 0:
            even += 1
        else:
            odd += 1
    return [0]*even + [1]*odd
print(transform_array([1,5,1,4,2]))
