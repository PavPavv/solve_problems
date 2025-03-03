items = [
    {
        "id": 1,
        "weight": 1,
        "name": "chocolate"
    },
    {
        "id": 2,
        "weight": 1,
        "name": "bottle of water"
    },
    {
        "id": 3,
        "weight": 1,
        "name": "empty cup"
    },
    {
        "id": 4,
        "weight": 2,
        "name": "piece of gold"
    },
    {
        "id": 5,
        "weight": 2,
        "name": "rare picture"
    }
]

def greedy_knapsack(items, max_weight):
    bag_weight = 0
    bag_items = []
    for item in items:
        if bag_weight + item["weight"] <= max_weight:
            bag_weight += item["weight"]
            bag_items.append(item)
    return bag_items
print(greedy_knapsack(items, 4))
