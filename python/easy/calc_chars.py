def calc_chars(s):
  word = ''.join(sorted(s.strip()))
  hash = {}
  result = ''

  for char in word:
    if char in hash:
      hash[char] = hash[char] + 1
    else:
      hash[char] = 1

  for char in hash:
    result += f'{char}{hash[char]}'
  return result


print(calc_chars('BBBAADDDDDECCCC'))