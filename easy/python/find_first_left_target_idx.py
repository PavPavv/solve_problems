def find_first_left_target_idx(arr, target):
  for item in arr:
    if item == target:
      return item
  return -1
print(find_first_left_target_idx([1,2,3,1,2,3],3))

# O(n-k)
