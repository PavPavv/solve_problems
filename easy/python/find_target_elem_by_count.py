def find_target_elem_by_count(arr, amount):
	for item in arr:
		if len(item) == amount:
			return item
	return ''
print(find_target_elem_by_count(['Mark','John','Anna','Maria'],5))

