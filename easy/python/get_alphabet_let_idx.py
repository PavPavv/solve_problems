def get_alphabet_let_idx(letter):
  alphabet  = ('a', 'b', 'c', 'd', 'e', 'f',  'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  if letter.lower() in alphabet:
    result =  alphabet.index(letter.lower()) + 1
    return "Position of alphabet: " + format(result) + ""
  return "Not in Eng alphabet"
print(get_alphabet_let_idx('a'))
print(get_alphabet_let_idx('B'))
print(get_alphabet_let_idx('z'))
print(get_alphabet_let_idx('я'))

# O(n)

