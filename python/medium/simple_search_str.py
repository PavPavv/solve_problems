def simple_search_str(text,pattern):
  N = int(len(text))
  M = int(len(pattern))
  i = 0
  j = 0

  # Dijkstra loop
  # N - M: possible coincident string length
  # j < M: pattern index can not be more than pattern length
  # text[i + j] === pattern[j]: ???

  # can extend coincident segment
  while (i <= N-M and j < M):
    if text[i+j] == pattern[j]:
      j += 1
    else:
      i += 1
      j = 0
  return i
print(simple_search_str('spaceship', 'ship'))
print(simple_search_str('abcdefghi', 'cdefg'))
