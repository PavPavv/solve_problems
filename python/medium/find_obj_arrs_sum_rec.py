company = {
  "sales": [
    {
      "name": "John",
      "salary": 1000,
    },
    {
      "name": "Alice",
      "salary": 600,
    },
  ],
  "development": {
    "sites": [
      {
        "name": "Peter",
        "salary": 2000,
      },
      {
        "name": "Alex",
        "salary": 1800,
      },
    ],
    "internals": {
      "client": [
        {
          "name": "Mag",
          "salary": 300,
        },
      ],
      'server': [
        {
          "name": "Don",
          "salary": 33300,
        },
        {
          "name": "Max",
          'salary': 700,
        },
      ],
    },
  },
}

def find_obj_arrs_sum_rec(department):
  if type(department) == list:
    result = 0
    for item in department:
      result = result + item["salary"]
    return result
  else:
    result = 0
    subDeps = list(department.values())
    for subDep in subDeps:
      result = result + find_obj_arrs_sum_rec(subDep)
    return result
print(find_obj_arrs_sum_rec(company))
