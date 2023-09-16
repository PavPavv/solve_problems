l = [3,5,2,1,3,7,66,8,9,4,100,45]
def find_max_list_val(list):
  max = list[0]
  for item in list:
    if item > max:
      max = item
  return max
print(find_max_list_val(l))
# O(n)