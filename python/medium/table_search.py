import math

def table_search(source, target):
  barrier = '|'
  N = int(len(source) - 1)
  l = 0
  r = N
  i = -1

  while l < r:
    middle = math.floor((l+r) / 2)
    i = 0

    while target[i] != barrier and target[i] == source[i]:
      i += 1
    
    if (source[middle] < target[i]):
      l = middle + 1
    else:
      r = middle
  
  if (r < N):
    i = 0
    while target[i] != barrier and target[i] == source[i]:
      i += 1

  if r < N and target[i] == source[i]:
    return l
  
  return l

print(table_search('abc def ghi','def|'))