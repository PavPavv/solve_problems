def find_prev_duplicate(arr):
  for i, el in enumerate(arr):
    prev = arr[i - 1];
    if prev in arr:
      if prev == arr[i]:
        return True
  return False
print(find_prev_duplicate([1,2,3,3,4,5]))
print(find_prev_duplicate([1,2,3,4,5]))
#	O(n-k)
