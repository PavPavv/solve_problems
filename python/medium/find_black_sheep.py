def find_black_sheep(arr):
  even = []
  odd = []
  for item in arr:
    if item % 2 == 0:
      even.append(item)
    else:
      odd.append(item)

  if len(even) > 1:
    return odd[0]
  else:
    return even[0]

print(find_black_sheep([2,4,6,8,9,10,12]))

class Finder():
    def __init__(self, l):
        self.l = l

    def _is_l(self, l):
        if not isinstance(l, list):
            return False
        else:
            return True

    def _is_even_l(self, l):
        if self._is_l(l):
            first_three = l[0:3]
            r = list(filter(lambda item: item % 2 == 0, first_three))
            if len(r) > 1:
                return True
            else:
                return False
        else:
            raise TypeError('Error! Must be a list!')

    def black_sheep(self):
        is_even = self._is_even_l(self.l)
        if is_even:
            return list(filter(lambda item: item % 2 != 0, self.l))[0]
        else:
            return list(filter(lambda item: item % 2 == 0, self.l))[0]
            
test = [2, 4, 6, 8, 9, 10, 12]
test1 = [1, 3, 5, 7, 8, 9, 11]
finder = Finder(test)
finder1 = Finder(test1)
print(finder.black_sheep())
print(finder1.black_sheep())
