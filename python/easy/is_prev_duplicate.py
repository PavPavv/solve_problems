def is_prev_duplicate(arr):
  for i, el in enumerate(arr):
    prev = arr[i - 1];
    if prev in arr:
      if prev == arr[i]:
        return True
  return False
print(is_prev_duplicate([1,2,3,3,4,5]))
print(is_prev_duplicate([1,2,3,4,5]))
#	O(n-k)
