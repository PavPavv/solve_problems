l = [31,4,15,92,6,5,3,5]

def max(l):
  if not isinstance(l, list):
    return 0
  if len(l) > 0:
    max = l[0]
    for item in l:
      if item > max:
        max = item
    return max
  else:
    return 0
print(max([]))
print(max(l))
print(max(1))
print(max([-1,-10,-20,-0.5,-167]))

# O(N)