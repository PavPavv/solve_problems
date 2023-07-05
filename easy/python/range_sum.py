def range_sum(a,b):
	result = 0
	start = a
	end = b

	if a > b:
		start = b
		end = a

	for num in range(start, end+1):
		result += num
	return result
print(range_sum(3,5))
#	O(n)

