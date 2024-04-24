def boyer_moore_substr_search(pattern, text):
  M = len(pattern)
  N = len(text)
  i = 0
  j = 0
  k = 0
  r = -1
  d = []

  for item in range(127):
    i = item
    d.insert(i, M)

  for item in range(M-2):
    j = item
    d[text.index(pattern[j])] = M-j-1

  i = M
  j = M
  k = i
  
  print(d)
  print('-------------')

  while j > 0 and i <= N:
    if text[k-1] == pattern[j-1]:
      k -= 1
      j -= 1
    else:
      i = i + d[text.index(text[i-1])]
      j = M
      k = i
  
  if j <= 0:
    r = k

  print(j)
  print(k)
  return r


print(boyer_moore_substr_search('ABCDABD', 'ABC ABCDAB ABCDABCDABDE'))