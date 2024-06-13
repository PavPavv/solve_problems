def check_brackets(s):
    if not s.strip():
        return False

    opens = ['(','{','[']
    closes = [')','}',']']
    stack = []

    for item in s:
        if item in opens:
            stack.append(item)
        elif item in closes:
            close_idx = closes.index(item)
            open_bracket = opens[close_idx]
            if len(stack) > 0 and open_bracket == stack[len(stack) - 1]:
                stack.pop()
            else:
                stack.append(item)
    if len(stack) == 0:
        return True
    else:
        return False


print(check_brackets('(){}[]')); #  True
print(check_brackets('([{}])')); #  True
print(check_brackets('([{}{}{}])')); #  True
print(check_brackets('([{}{}{}]')); #  False
print(check_brackets('[{}]]]')); #  False
print(check_brackets(' ')); #  False