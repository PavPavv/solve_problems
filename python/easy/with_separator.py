def with_separator(separator, *args):
  result = ''
  print(args)
  for arg in args:
    result += separator + format(arg)
  return result
print(with_separator('!',1,2,3,4,5))

def with_separator_1(args):
  separator = args[0]
  return separator + separator.join([f"{value}" for value in args[1:]])
print(with_separator_1(['$',1,2,3,4]))
