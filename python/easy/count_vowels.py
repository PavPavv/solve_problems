def count_vowels(word):
	vowels = ['a','e','i','o','u']
	counter = 0

	for letter in word:
		if letter in vowels:
			counter += 1
	return counter
print(count_vowels('wolf'))
#	0(n)

