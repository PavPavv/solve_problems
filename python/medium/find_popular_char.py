def find_popular_char(str):
  char_dict = {}
  min = 0
  result = ''

  for char in str:
    if char in char_dict:
      char_dict[char] += 1
    else:
      char_dict[char] = 1

  for key, value in char_dict.items():
    if value > min:
      min = value
      result = key

  return result

print(find_popular_char('abcccccccd'))  #  c