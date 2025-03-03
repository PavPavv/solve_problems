def reverseStr(str):
  counter = 0;
  reversedStr = ''
  
  while(counter < len(str)):
    counter += 1
    reversedStr += str[len(str) - counter]
  return reversedStr
  
def is_palindrome(str):
	reversedStr = reverseStr(str);
	return str.lower() == reversedStr.lower()

print(is_palindrome('Ana'));	# True
print(is_palindrome('cat'));	# False
#	O(n)

def is_palindrome_r(s):
    if len(s) <= 1:
        return True
    if s[0] != s[len(s) - 1]:
        return False
    s = s[1:-1]
    return is_palindrome_r(s)
print(is_palindrome_r("racecar"))
