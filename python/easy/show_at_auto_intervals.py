import time

def show_at_auto_intervals(interval):
  counter = interval
  if counter <= 10:
    print(counter)
    counter +=1
    time.sleep(counter)
    show_at_auto_intervals(counter)
  else:
    return  

show_at_auto_intervals(1)