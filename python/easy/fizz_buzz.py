def fizz_buzz(n):
  for item in range(1, n + 1):
    if (item % 3 == 0 and item % 5 == 0):
      print('FizzBuzz')
    elif (item % 5 == 0):
      print('Buzz')
    elif (item % 3 == 0):
      print('Fizz')
fizz_buzz(25)