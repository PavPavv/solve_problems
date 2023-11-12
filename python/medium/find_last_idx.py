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