def find_first_and_second_max(arr):
  if len(arr) < 2:
    return []
  max1 = max(arr[0], arr[1])
  max2 = min(arr[0], arr[1])

  for el in arr:
    if el > max1:
      max2 = max1
      max1 = el
    elif el < max1 and el > max2:
      max2 = el

  return [max1, max2]
print(find_first_and_second_max([10,-2,1,2,3,4,5]))