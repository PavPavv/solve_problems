import datetime

# https://thecode.media/python-timing/

def speed_test_one_arg(func, arg):
    start = datetime.datetime.now()
    i = 0
    while i < 100000:
        func(arg)
        i += 1
    finish = datetime.datetime.now()
    print('Время работы: ' + str(finish-start) + '\n')
