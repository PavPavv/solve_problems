from typing import List

def build_array(nums: List[int]) -> List[int]:
    ans = []
    for i in range(0, len(nums)):
        ans.append(nums[nums[i]])
    return ans       