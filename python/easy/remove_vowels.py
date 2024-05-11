import re

def remove_vowels(s):
  strArr = list(s)
  vowels = ['a','e','i','o','u']

  for char in s:
    for letter in vowels:
      if char.lower() == letter:
        strArr.remove(char)
  return ''.join(strArr)
print(remove_vowels('This website is for losers LOL!'))
print(remove_vowels("No offense but,\nYour writing is among the worst I've ever read"))
print(remove_vowels("What are you, a communist?"))
#	O(n^2)

def remove_vowels_1(string):
    return "".join(c for c in string if c.lower() not in "aeiou")
#	O(n^2)

def remove_vowels_2(s):
    for i in "aeiouAEIOU":
        s = s.replace(i,'')
    return s
#	O(n^2)

def removeVowels_3(s):
  return re.sub(r'[aeiouAEIOU]', '', s)
#	O(n^2)

def remove_vowels_4(string):
    return re.sub('[aeiou]', '', string, flags = re.IGNORECASE)
#	O(n^2)

def remove_vowels_5(string):
    vowels = "aeiouAEIOU"
    for vowel in vowels:
        string = string.replace(vowel, '')
    return string
#	O(n^2)

