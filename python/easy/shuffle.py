from typing import List

def shuffle(nums: List[int], n: int) -> List[int]:
    result: List[int] = []
    for i in range(0, n):
        result.append(nums[i])
        result.append(nums[n + i])
    return result