def longest_common_prefix_simple(arr):
  result = ''
  if isinstance(arr, list) and len(arr) > 1:
    prepared_arr = []

    for item in arr:
      if isinstance(item, str):
        prepared = item.lower()
        prepared_arr.append(prepared)

    first_word = prepared_arr[0]
    prepared_arr.pop(0) 
    counter = 0

    while counter < len(first_word):
      candidate = first_word[counter]

      for word in prepared_arr:
        if word[counter] != candidate:
          return result
      
      result = result + candidate
      counter = counter + 1


  return result
print(longest_common_prefix_simple(['flower', 'flow', 'Flight']))

def lcp(arr: None) -> str:
    if not isinstance(arr, list) and len(arr) > 1:
        return TypeError('List of strs expected!')
    prepared_arr = []
    for item in arr:
        if not isinstance(item, str):
            prepared_arr.append('')
        else:
            prepared_arr.append(item.strip().lower())
    first_attempt = prepared_arr[0]
    prepared_arr.remove(first_attempt)
    counter = 0
    result = ''

    while counter <= len(first_attempt):
        candidate_char = first_attempt[counter]

        for word in prepared_arr:
            if word[counter] != candidate_char:
                return result;
        
        result += candidate_char
        counter += 1
    return result

print(lcp(['flower', 'flow', 'Flight']))

