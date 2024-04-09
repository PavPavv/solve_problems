data = [
  {
    "id": 1,
    "name": "Jack",
  },
  {
    "id": 2,
    "name": "Mag",
  },
  {
    "id": 3,
    "name": "Paul",
  },
]

def linear_search(data, target):
  counter = 0

  while counter < len(data) and data[counter]["id"] != target:
    counter += 1
  if target > len(data):
    return None
  return data[counter]
print({ "name": "linear_search", "result": linear_search(data, 2) })
print({ "name": "linear_search", "result": linear_search(data, 10) })
# O(n-k)

def linear_search_1(data, target):
  barrier = len(data)
  data.append({ "id": barrier, "name": "" })
  counter = 0

  if target > barrier:
    return None

  while data[counter]["id"] != target:
    counter += 1

  if counter == barrier:
    return None
  return data[counter]
print({ "name": "linear_search_1", "result": linear_search_1(data, 2) })
print({ "name": "linear_search_1", "result": linear_search_1(data, 10) })
# O(n-k)