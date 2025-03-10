// `
//                                 root(5)
//                              ______|______
//                             /             \
//                         parent(4)       parent(7)
//                          /  \             /    \
//           internal node(2)  leaf(3)  leaf(6)  leaf(8)
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
    value: 7,

    // leaf
    left: {
      value: 6,
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

function findBinaryNode(binaryTree: BTree, target: number): BTreeNode | null {
  let node: BTreeNode | null = binaryTree;
  while (node) {
    if (node.value === target) {
      return node;
    } else if (target > node.value) {
      node = node.right;
    } else {
      node = node.left;
    }
  }
  return null;
}
console.log(findBinaryNode(bTree, 7));
console.log(findBinaryNode(bTree, 23));

function insertLastToBinaryNode(binaryTree: BTree, newNode: BTreeNode): void {
  let node: BTreeNode | null = binaryTree;
  let lastNode: BTreeNode | null = null;

  while (node) {
    lastNode = node;
    if (newNode.value > node.value) {
      node = node.right;
    } else if (newNode.value < node.value) {
      node = node.left;
    } else {
      console.warn("Node with the same value already exists.");
      return;
    }
  }
  
  if (lastNode) {
    if (newNode.value > lastNode.value) {
      lastNode.right = newNode;
    } else {
      lastNode.left = newNode;
    }
  }
}
insertLastToBinaryNode(bTree, { value: 10, left: null, right: null });
console.log('bTree: ', JSON.stringify(bTree));