"""
                                root(5)
                                  |
                            /           \
                        parent(4)       parent(6)
                         /  \          /     \
          internal node(2)  leaf(3)  leaf(7)    leaf(8)
                    /
                 leaf(1)

tree sum: 36
tree depth: 4
tree height: 6
"""

bTree = {
  # root
  "value": 5,

  # parent
  "left": {
    "value": 4,

    # Internal node
    "left": {
      "value": 2,
      # leaf
      "left": {
        'value': 1,
        "left": None,
        "right": None,
      },
      "right": None,
    },

    # leaf
    "right": {
      "value": 3,
      "left": None,
      "right": None,
    },
  },

  # parent
  "right": {
    "value": 6,

    # leaf
    "left": {
      "value": 7,
      "left": None,
      "right": None,
    },

    # leaf
    "right": {
      "value": 8,
      "left": None,
      "right": None,
    },
  },
}

def find_btree_sum(bt):
  result = 0

  if "value" in bt and bt["value"] is not None:
    result = result + bt["value"]

  if "left" in bt and bt["left"] is not None:
    result = result + find_btree_sum(bt["left"])

  if "right" in bt and bt["right"] is not None:
    result = result + find_btree_sum(bt["right"])

  return result

print(find_btree_sum(bTree))