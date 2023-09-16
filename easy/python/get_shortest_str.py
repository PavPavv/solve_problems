str1 = "What a beautiful day!"


def get_shortest_str(s):
  l = s.split()
  min = l[0]
  for item in l:
    if len(item) < len(min):
      min = item
  return min


print(get_shortest_str(str1))