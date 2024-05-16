def is_dict_empty(d):
  if len(d) > 0:
    return False
  return True
print(is_dict_empty({}))
print(is_dict_empty({'name': 'Pav'}))

test_dict = {}

if not test_dict:
  print("Dict is Empty")


if not bool(test_dict):
  print("Dict is Empty")


if len(test_dict) == 0:
  print("Dict is Empty")

dict_1 = {'name': 'Jack'}
dict_2 = {}

def is_dict_empty_1(d):
  for key in d:
    return False
  return True
print(is_dict_empty_1(dict_1))
print(is_dict_empty_1(dict_2))