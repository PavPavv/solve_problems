`
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
`;

var bTree = {
  // root
  value: 5,

  // parent
  left: {
    value: 4,

    // Internal node
    left: {
      value: 2,
      // leaf
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: null,
    },

    // leaf
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },

  // parent
  right: {
    value: 6,

    // leaf
    left: {
      value: 7,
      left: null,
      right: null,
    },

    // leaf
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};

function bTreeSum(t) {
  var result = 0;

  if (t.value) {
    result += t.value;
  }

  if (t.left) {
    result += bTreeSum(t.left);
  }

  if (t.right) {
    result += bTreeSum(t.right);
  }

  return result;
}

console.log(bTreeSum(bTree));
