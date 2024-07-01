def compare(a,b):
  if a.upper() <= b.upper():
    return a
  else:
    return b
print(compare('banana', 'avocado'))
print(compare('Banana', 'avocado'))

class Compare():
    def __init__(self):
        pass

    def two_strs(self, a, b):
        if a.lower() <= b.lower():
            return a
        else:
            return b
test = Compare()
print(test.two_strs('banana','avocado'))
print(test.two_strs('Banana','avocado'))
print(test.two_strs('Awesome','Avocado'))
