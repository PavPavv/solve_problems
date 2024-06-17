from datetime import date
import calendar

month_length = 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
key_array = ('Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь')

def print_month(month, year):
    idx = key_array.index(month)
    wd = date(year, idx + 1, 1).weekday()
    days = month_length[idx]
    if calendar.isleap(year) and idx == 1:
        days += 1

    print(f"{month} {year}".center(20))
    print("Пн Вт Ср Чт Пт Сб Вс")
    print('   '*wd, end='')

    for day in range(days):
        wd = (wd + 1) % 7
        eow = " " if wd % 7 else "\n"
        print(f"{day+1:2}", end=eow)
    print()
print_month('Октябрь', 1988)
