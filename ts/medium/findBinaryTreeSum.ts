// `
//                                 root(5)
//                                   |
//                             /           \
//                         parent(4)       parent(6)
//                          /  \          /     \
//           internal node(2)  leaf(3)  leaf(7)    leaf(8)
//                     /
//                  leaf(1)

// tree sum: 36
// tree depth: 4
// tree height: 6
// `;

type BTreeNode = {
  value: number;
  left: BTreeNode | null;
  right: BTreeNode | null;
};

type BTree = BTreeNode | null;

export const bTree: BTree = {
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

export const findBinaryTreeSum = (bt: BTree): number => {
  let result: number = 0;
  if (bt?.value) {
    result += bt.value;
  }

  if (bt?.left) {
    result += Number(findBinaryTreeSum(bt.left));
  }

  if (bt?.right) {
    result += Number(findBinaryTreeSum(bt.right));
  }

  return result;
};

console.log(findBinaryTreeSum(bTree));
