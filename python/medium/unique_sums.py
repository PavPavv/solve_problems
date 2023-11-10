def unique_sums(arr, target):
  hash = {}
  list = []
  for num in arr:
    hash[num] = num
  for num in hash:
    secondNum = target - num
    if secondNum in hash and secondNum > num:
      list.append([hash[num], secondNum])
  return list


print(unique_sums([1, 2, 3, 4, 5, 6], 6))