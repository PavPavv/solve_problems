def count_dublicates(arr):
  hashTable = {}
  result = []

  for i, item in enumerate(arr):
    if arr[i] in hashTable:
      hashTable[arr[i]]['count'] += 1
      hashTable[arr[i]]['index'].append(i)
    else:
      hashTable[arr[i]] = {
        'item': arr[i],
        'count': 1,
        'index': [i],
      }

  for key in hashTable:
    if hashTable[key]['count'] > 1:
      result.append(hashTable[key])

  return result


print(count_dublicates([1, 2, 3, 3, 4, 5, 5, 6, 7]))
print(count_dublicates([1, 2, 3, 4, 5, 6, 7]))
