def square_each_num(num):
  if num < 10:
    return num

  result = ''
  slist = list(format(num))
  for item in slist:
    squareNum = int(item)*int(item)
    result += format(squareNum)
  return int(result)
print(square_each_num(25))  # 425
# O(n)

