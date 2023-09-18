def find_duplicates_in_range(arr,l,r,target):
  counter = 0
  start = 0
  end = 0
# O(n)

  if l < 0:
    start = 0
  else:
    start = l

  if r < 0:
    end = 0
  else:
    end = r

  if start > end:
    [start, end] = [end, start]

  for item in arr[start:end]:
    if item == target:
      counter += 1
  return counter

print(find_duplicates_in_range([0,0,0,0,1,2,3,4,5,6,7,8,9,9,9,0,10], 1, 5, 0))
print(find_duplicates_in_range([0,0,0,0,1,2,3,4,5,6,7,8,9,9,9,0,10], 1, 5, 9))
print(find_duplicates_in_range([0,0,0,0,1,2,3,4,5,6,7,8,9,9,9,0,10], 1, -1, 0))
# O(n)