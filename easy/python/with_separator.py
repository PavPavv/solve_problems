def with_separator(separator, *args):
  result = ''
  for arg in args:
    result += separator + format(arg)
  return result
print(with_separator('!',1,2,3,4,5))