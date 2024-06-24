def find_min_even(arr):
  flag = False
  min = arr[0]
  for item in arr:
    if item % 2 == 0 and (not flag or item < min):
      min = item
      flag = True
  return min
print(find_min_even([10, -2, 1, 2, 3, 4, 5]))

def find_min_even_1(l):
  if not isinstance(l, list) or len(l) == 0:
    return 0

  min = l[0]

  for item in l:
    if item % 2 == 0 and item < min:
      min = item
  return min
print(find_min_even_1([10, -2, 1, 2, 3, 4, 5]))
