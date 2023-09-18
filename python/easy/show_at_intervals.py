import datetime


def show_at_intervals(my_interval):
  counter = 0
  start_time = datetime.datetime.now()
  while counter <= 10:
    if (datetime.datetime.now() - start_time).seconds == my_interval:
      start_time = datetime.datetime.now()
      print(counter)
      counter += 1
  return

show_at_intervals(1)