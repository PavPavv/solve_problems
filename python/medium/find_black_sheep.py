def find_black_sheep(arr):
  even = []
  odd = []
  for item in arr:
    if item % 2 == 0:
      even.append(item)
    else:
      odd.append(item)

  if len(even) > 1:
    return odd[0]
  else:
    return even[0]

print(find_black_sheep([2,4,6,8,9,10,12]))