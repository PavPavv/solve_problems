def check_brackets(s):
  if not len(s.strip()):
    return False
  open = ["(", "[", "{"]
  close = [")", "]", "}"]
  stack = []

  for item in s:
    if item in open:
      stack.append(item)
    elif item in close:
      openIdx = close.index(item)
      if ((len(stack) > 0) and open[openIdx] == stack[len(stack) - 1]):
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
