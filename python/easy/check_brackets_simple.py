def check_brackets_simple(s):
  stack = []
  for item in s:
    if item == '(':
      stack.append(item)
    else:
      if not stack:
        return False
      else:
        stack.pop()

  if len(stack) == 0:
    return True
  else:
    return False


print(check_brackets_simple('((()))'))
print(check_brackets_simple('((()'))
print(check_brackets_simple('((()))))'))
print(check_brackets_simple('()()()'))
print(check_brackets_simple('()()()())))'))
