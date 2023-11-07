def count(num):
  counter = num or 0
  def increment():
    nonlocal counter
    counter += 1
    return counter
  return increment

c1 = count(100)
c1()
c1()
c1()
c1()
c1()
c1()
result = c1()
print(result)