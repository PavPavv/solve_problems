from speed_test import speed_test_one_arg

def reverse_str(s=''):
    if isinstance(s, str):
        i = 0
        result = ''
        while i < len(s):
            i += 1
            result += s[len(s)-i]
        return result
    return ''


def is_palindrome(s=''):
    if isinstance(s, str):
        return s.lower() == reverse_str(s.lower())
    return False
# print(is_palindrome('Anna'))
# print(is_palindrome('test'))
# print(is_palindrome('test'))
# O(n)

# speed_test_one_arg(is_palindrome,'Anna')
# speed_test_one_arg(is_palindrome,'SDdssdfgsdEsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf')
# ~10000 microsec

def is_palindrome1(s):
    return s.lower()[::-1] == s.lower()
# print(is_palindrome1('Anna'))
# print(is_palindrome1('test'))
# print(is_palindrome1('test'))
# speed_test_one_arg(is_palindrome1,'Anna')
# speed_test_one_arg(is_palindrome1,'SDdssdfgsdEsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf')
# ~18000-25000 microsec

def is_palindrome_2(s=''):
    if isinstance(s, str):
        word = s.lower()
        while len(word) > 1:
            if word[0] != word[-1]:
                return False
            word = word[1:-1]
        return True
    return False
# print(is_palindrome_2('Anna'))
# print(is_palindrome_2('test'))
# print(is_palindrome_2('test'))
speed_test_one_arg(is_palindrome1,'Anna')
speed_test_one_arg(is_palindrome1,'SDdssdfgsdEsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf')
# ~18000-27000 microsec