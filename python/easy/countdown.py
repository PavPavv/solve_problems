from time import sleep
from os import system

def countdown():
  i = 10
  while i >= 0:
    system('clear')
    print(i)
    i -= 1
    sleep(1)
  system('clear')
  print('Tah-dah!')
countdown()