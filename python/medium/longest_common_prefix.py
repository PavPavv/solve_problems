def longest_common_prefix(arr):
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
print(longest_common_prefix(['flower', 'flow', 'Flight']))