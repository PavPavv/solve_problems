
def find_first_right_target(arr, target):
	result = (-1, -1)
	for i, item in enumerate(arr):
		if item == target:
			updateTuple = (i, item)
			result = updateTuple
	return result
print(find_first_right_target([1,2,3,1,2,3],3))
# O(n)
