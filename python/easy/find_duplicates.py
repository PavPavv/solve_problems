def find_duplicates(arr):
	map = {}
	result = []

	for item in arr:
		if item in map:
			map[item] += 1
		else:
			map[item] = 1

	for item in map:
		if (map[item] > 1):
			result.append(item)
	return result		

print(find_duplicates([1,2,3,3,4,5,5,6,7])) # [3,5]
print(find_duplicates([1,2,3,4,5,6,7])) # []
# O(n)