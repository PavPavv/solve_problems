from math import floor

def f(str):
  return str[floor(len(str) / 2)]
print(f('test'))
print(f('testing'))

#  O(1)