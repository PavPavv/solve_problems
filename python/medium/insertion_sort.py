from typing import List

users = [
  {
    "id": 8,
    "name": "Tom",
  },
  {
    "id": 3,
    "name": "Dave",
  },
  {
    "id": 2,
    "name": "Mag",
  },
  {
    "id": 9,
    "name": "Billy",
  },
  {
    "id": 4,
    "name": "John",
  },
  {
    "id": 1,
    "name": "Jack",
  },
  {
    "id": 5,
    "name": "James",
  },
    {
    "id": 7,
    "name": "Kurt",
  },
  {
    "id": 6,
    "name": "Lars",
  },
]

def insertion_sort(l):
  result = l[:]
  j = 0
  for i, item in enumerate(result[1:]):
    j = i+1
    while j > 0 and item["id"] < result[j-1]["id"]:
      result[j] = result[j - 1]
      j -= 1
    result[j] = item
  return result
    
print(insertion_sort(users))

def insertion_sort_1(l: List[int]) -> List[int]:
    result = l[:]
    for i in range(1,len(result)):
        j = i
        while j and result[j-1] > result[j]:
            swap = result[j-1]
            result[j-1] = result[j]
            result[j] = swap
            j -= 1
            swap = None
    return result
print(insertion_sort_1([1,2,3,4,5,6,9,7,8]))
