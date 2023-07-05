import re

def replace_all(str, pattern):
  result = ''
  if (str and pattern):
    result = re.sub(pattern, '', str);
  return result
print(replace_all('te#st##', '#'))
# O(n)
