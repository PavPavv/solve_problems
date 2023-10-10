def check_brackets(s):
  if not len(s.strip()):
    return False
  open_list = ["(", "[", "{"]
  close_list = [")", "]", "}"]
  stack = []

  for item in s:
    if item in open_list:
      stack.append(item)
    elif item in close_list:
      openIdx = close_list.index(item)
      if ((len(stack) > 0) and open_list[openIdx] == stack[len(stack) - 1]):
        stack.pop()
      else:
        return False
  if len(stack) == 0:
    return True
  else:
    return False
  



print(check_brackets('(){}[]'))
print(check_brackets('([{}])'))
print(check_brackets('([{}{}{}])'))
print(check_brackets('([{}{}{}]'))
print(check_brackets('[{}]]]'))
print(check_brackets(' '))
