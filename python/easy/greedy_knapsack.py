items = [
    {
        "id": 1,
        "weight": 1,
        "price": 12,
        "value_weight_ratio": 12,
        "name": "chocolate"
    },
    {
        "id": 2,
        "weight": 1,
        "price": 10,
        "value_weight_ratio": 10,
        "name": "bottle of water"
    },
    {
        "id": 3,
        "weight": 1,
        "price": 3,
        "value_weight_ratio": 3,
        "name": "empty cup"
    },
    {
        "id": 4,
        "weight": 2,
        "price": 120,
        "value_weight_ratio": 60,
        "name": "piece of gold"
    },
    {
        "id": 5,
        "weight": 2,
        "price": 300,
        "value_weight_ratio": 150,
        "name": "rare picture"
    }
]

items_prices = [item["price"] for item in items]
items_weights = [item["weight"] for item in items]

def greedy_knapsack(items, max_weight):
    bag_weight = 0
    bag_items = []
    for item in items:
        if bag_weight + item["weight"] <= max_weight:
            bag_weight += item["weight"]
            bag_items.append(item)
    return bag_items
print(greedy_knapsack(items, 4))

def greedy_knapsack_trade(item_idx, max_weight):
    if max_weight == 0 or item_idx < 0:
        return 0
    if items_weights[item_idx] > max_weight:
        return greedy_knapsack_trade(item_idx - 1, max_weight)
    return max(
            greedy_knapsack_trade(item_idx-1, max_weight),
            greedy_knapsack_trade(
                item_idx-1,
                max_weight - items_weights[item_idx]
            ) + items_prices[item_idx]
    )
print(greedy_knapsack_trade(len(items)-1, 4))

def powered_knapsack(elements, max_weight):
    bag_weight = 0
    bag_items = []
    bag_value = 0
    sorted_things_by_ratio = sorted(elements, key=lambda x: x["value_weight_ratio"])

    for elem in elements:
        weight = min(max_weight - bag_weight, elem["weight"])
        bag_weight = bag_weight + weight
        value = weight * elem["value_weight_ratio"]
        bag_value = bag_value + value
        bag_items.append(elem)
    return bag_items, bag_value
print(powered_knapsack(items, 4))
