data = {
    "value": 10,
    "left": {
        "value": 6,
        "left": {
            "value": 4,
            "left": False,
            "right": False,
        },
        "right": {
            "value": 8,
            "left": False,
            "right": False,
        },
    },
    "right": {
        "value": 18,
        "left": {
            "value": 15,
            "left": False,
            "right": False,
        },
        "right": {
            "value": 21,
            "left": False,
            "right": False,
        },
    },
}
def find_binary_node(binary_tree, value):
    node = binary_tree
    while node:
        if node["value"] == value:
            return node
        elif value > node["value"]:
            node = node["right"]
        else:
            node = node["left"]
    return "NOT FOUND"
print(find_binary_node(data,21))
print(find_binary_node(data,4))
print(find_binary_node(data,9))

def insert_last_binary_node(binary_tree, new_node):
    node = binary_tree
    while node:
        last_node = node
        if new_node["value"] > node["value"]:
            node = node["right"]
        else:
            node = node["left"]
    if new_node["value"] > last_node["value"]:
        last_node["right"] = new_node
    else:
        last_node["left"] = new_node
insert_last_binary_node(data,{"value": 29, "left": False, "right": False})
print(find_binary_node(data,29))
print(data)
#   O(logN) for balanced only
