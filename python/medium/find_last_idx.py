def last_index_of(s, target):
  result = -1
  for i, item in enumerate(s):
    if (item == target):
      result = i
  return result

def find_last_idx(s, target_a, target_b):
  a = last_index_of(s, target_a)
  b = last_index_of(s, target_b)

  if a >= b:
    return {
      target_a: last_index_of(s, target_a)
    }
  elif a < b:
    return {
      target_b: last_index_of(s, target_b)
    }
  return {}
print(find_last_idx('abbaao', 'a', 'b'))

class Finder():

    def __init__(self, s):
        self.s = s

    def _check_str(self, s):
        if not isinstance(s, str):
            return False
        return True

    #    Returns int
    def _find_last_idx(self, s, target):
        if not self._check_str(s) or not self._check_str(target):
            raise TypeError('Only strings are allowed, dude!')
        last = -1
        for i, letter in enumerate(s):
            if letter == target and i > last:
                last = i
        return last
                
    def compare_idxs(self, str_a, str_b):
        if not self._check_str(str_a) or not self._check_str(str_b):
            raise TypeError('Only strings are allowed, dude!')
        print(self.s)
        a = self._find_last_idx(self.s, str_a)
        b = self._find_last_idx(self.s, str_b)
        if a > b:
            return { str_a: a }
        elif a < b:
            return { str_b: b }
        else:
            return {}
r = Finder('abbaao')
result = r.compare_idxs('a', 'b')
result_1 = r.compare_idxs('c', 'd')
result_2 = r.compare_idxs(1, [])

print(result)
print(result_1)
print(result_2)
