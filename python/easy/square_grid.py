def square_grid(count, cell_char):
  result = ''
  for item in range(1, count + 1):
    if (item % 2 == 0):
      row = ''
      for cell in range(count):
        if (cell % 2 == 0):
          row = row + cell_char
        else:
          row = row + ' '
      result = result + row + '\n'
    else:
      row = ''
      for cell in range(count):
        if (cell % 2 == 0):
          row = row + ' '
        else:
          row = row + cell_char
      result = result + row + '\n'
  return result
print(square_grid(8, '#'))