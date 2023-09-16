def is_dict_empty(d):
  if len(d) > 0:
    return False
  return True
print(is_dict_empty({}))
print(is_dict_empty({'name': 'Pav'}))