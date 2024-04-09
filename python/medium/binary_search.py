import math

def binary_search(arr,target):
  l = 0
  r = len(arr) - 1
  middle = math.floor((l + r) / 2)

  while l <= r and arr[middle] != target:
    if arr[middle] < target:
      l = middle + 1
    else:
      r = middle - 1
    middle = math.floor((l + r) / 2)
  return middle
print(binary_search([1,2,3,4,5,6,7],2))
# O(logN)

def binary_search_1(arr,target):
  l = 0
  r = len(arr) - 1

  while l < r:
    middle = math.floor((l + r) / 2)
    if arr[middle] < target:
      l = middle + 1
    else:
      r = middle
  return l
print(binary_search_1([1,2,3,4,5,6,7],2))
# O(logN)