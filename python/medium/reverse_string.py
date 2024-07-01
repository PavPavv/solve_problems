def reverse_string(s):
  result = ''
  counter = 0

  while(counter < len(s)):
    counter = counter + 1
    result = result + s[len(s) - counter]
  return result
print(reverse_string('test'))

 def reverse_str(s):
    if not isinstance(s, str):
        # raise TypeError('Dude, I need a str!')
        return ''
    
    i = len(s) - 1
    result = ''
    while i >= 0:
        result += s[i]
        i -= 1
    return result
print(reverse_str(1))
print(reverse_str('avocado')) #    odacova

