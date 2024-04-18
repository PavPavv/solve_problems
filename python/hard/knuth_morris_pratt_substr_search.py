def knuth_morris_pratt_substr_search(pattern, text):
  M = len(pattern)
  N = len(text)
  r = -1
  i = None
  j = 1
  k = 0
  d = []

  d.append(-1)

  if pattern[0] != pattern[1]:
    d.insert(1, 0)
  else:
    d.insert(1, -1)
  
  while j < M - 1:
    if (k >= 0 and pattern[j] != pattern[k]):
      k = d[k]
    else:
      j += 1
      k += 1
      if pattern[j] != pattern[k]:
        d.insert(j, k)
      else:
        d.insert(j,d[k])
  
  i = 0
  j = 0

  while j < M and i < N:
    if j >= 0 and text[i] != pattern[j]:
      j = d[j]
    else:
      i += 1
      j += 1
  
  if j == M:
    r = i - M
  else:
    r = -1
  
  return r
print(knuth_morris_pratt_substr_search('ABCDABD', 'ABC ABCDAB ABCDABCDABDE'))