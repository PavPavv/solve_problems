def reverse_string(s):
  result = ''
  counter = 0

  while(counter < len(s)):
    counter = counter + 1
    result = result + s[len(s) - counter]
  return result
print(reverse_string('test'))
