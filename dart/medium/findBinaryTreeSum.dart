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

class BTreeNode {
  int value;
  BTreeNode left;
  BTreeNode right;

  BTreeNode(this.value, this.left, this.right);
}

class FindBinaryTreeSum {
  int getTreeSum(BTreeNode bt) {
    int result = 0;

    result += bt.value;

    // ignore: unnecessary_null_comparison
    if (bt.left != null) {
      result += getTreeSum(bt.left);
    }

    // ignore: unnecessary_null_comparison
    if (bt.right != null) {
      result += getTreeSum(bt.right);
    }

    return result;
  }
}
