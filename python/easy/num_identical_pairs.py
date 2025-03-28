from typing import List

"""
  Given an array of integers nums, return the number of good pairs.
  A pair (i, j) is called good if nums[i] == nums[j] and i < j.
"""

def num_identical_pairs(nums: List[int]) -> int:
    counter = 0
    hash_table = {}

    for num in nums:
        counter += hash_table.get(num, 0)
        hash_table[num] = hash_table.get(num, 0) + 1
    return counter
