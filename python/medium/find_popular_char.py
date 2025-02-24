def find_popular_char(str):
    char_dict = {}
    min_val = 0
    result = ''

    for char in str:
        if char in char_dict:
            char_dict[char] += 1
        else:
            char_dict[char] = 1

    for key, value in char_dict.items():
        if value > min_val:
            min_val = value
            result = key

        return result

print(find_popular_char('abcccccccd'))  #  c

def find_popular_char_1(s=''):
    if not isinstance(s,str) or s.strip() == '':
        return []

    d = {}
    for char in s:
        if char in d:
            d[char] += 1
        else:
            d[char] = 1

    sorted_dict_values = sorted(d.values())
    print(sorted_dict_values)

    if len(sorted_dict_values) > 1:
        def filter_items(pair):
            key, value = pair
            max_val = max(sorted_dict_values)
            print(max(sorted_dict_values))
            if value == max_val:
                return True
            else:
                return False
    
        return list(dict(filter(filter_items, d.items())).keys())
    else:
        return list(d.keys())
  
print(find_popular_char_1(None));
print(find_popular_char_1(2));
print(find_popular_char_1('  '));
print(find_popular_char_1('-'));
print(find_popular_char_1('bbbaaccc'));
print(find_popular_char_1('babacaddaagag'))
