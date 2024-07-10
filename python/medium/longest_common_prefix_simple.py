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
    if not isinstance(arr, list):
        raise TypeError('List must be provided!')
    elif len(arr) < 2:
        return arr[0]
    prepared_arr = []
    counter = 0
    result = ''
    
    for word in arr:
        if not isinstance(word, str):
            raise TypeError('Must be a str type!')
        if word:
            prepared_arr.append(word.lower().strip())
        else:
            prepared_arr.append('')

    first_attempt = prepared_arr[0]
    prepared_arr.remove(first_attempt)
    
    if first_attempt:
        while counter < len(prepared_arr):
            candidate_char = first_attempt[counter]
            for word in prepared_arr:
                if word[counter] != candidate_char:
                    return result
            result += candidate_char
            counter += 1

    return result
print(lcp(['flower']))
print(lcp(['']))
print(lcp(['', '', '']))
print(lcp(['flower', 'flow', 'Flight']))

