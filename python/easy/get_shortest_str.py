str1 = "What a beautiful day!"


def get_shortest_str(s):
  l = s.split()
  min = l[0]
  for item in l:
    if len(item) < len(min):
      min = item
  return min
print(get_shortest_str(str1))

def shortest_str(text):
  if isinstance(text, str):
    source = text.strip().split(' ')
    result = source[0]
    for word in source:
      if len(word) < len(result):
        result = word
    return result
  return ''
print(shortest_str('Повезло же кому-то родиться летом! ☀️'))