def reverseStr(str):
  counter = 0;
  reversedStr = ''
  
  while(counter < len(str)):
    counter += 1
    reversedStr += str[len(str) - counter]
  return reversedStr
  
def isPalindrome(str):
	reversedStr = reverseStr(str);
	return str.lower() == reversedStr.lower()

print(isPalindrome('Ana'));	# True
print(isPalindrome('cat'));	# False
#	O(n)
