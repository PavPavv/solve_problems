def group_anagram_pairs(a_list):
  a_dict = {}
  for item in a_list:
    sorted_item = ''.join(sorted(item.strip().lower()))
    if sorted_item in a_dict:
      a_dict[sorted_item].append(item)
    else:
      a_dict[sorted_item] = [item]
  return list(a_dict.values())

print(group_anagram_pairs(['ann', 'nan', 'd', 'pie', 'cort', 'iep']))
