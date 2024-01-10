def build_egypt_triangle(n):
  if n < 0:
    return
  cell = '#'
  result = ''
  for i, item in enumerate(range(n)):
    result = result + cell * i + '\n'
  return result
print(build_egypt_triangle(7))