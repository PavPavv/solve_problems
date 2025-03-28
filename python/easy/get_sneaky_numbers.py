from typing import List

def get_sneaky_numbers(nums: List[int]) -> List[int]:
    d = {}
    result = []
    for num in nums:
        if num in d:
            d[num] += 1
        else:
            d[num] = 1
    for key in d:
        if d[key] > 1:
            result.append(key)
    return result