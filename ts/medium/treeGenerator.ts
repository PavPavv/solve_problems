type MyNode = {
  id: number;
  text: string;
  children: MyNode[];
}

const data: MyNode[] = [
  {
      id: 1,
      text: 'one',
      children: [],
  },
  {
      id: 2,
      text: 'two',
      children: [],
  },
  {
      id: 3,
      text: 'three',
      children: [
          {
              id: 6,
              text: 'six',
              children: [
                  {
                      id: 10,
                      text: 'ten',
                      children: [],
                  },
              ],
          },
          {
              id: 7,
              text: 'seven',
              children: [
                  {
                      id: 11,
                      text: 'eleven',
                      children: [],
                  },
              ],
          },
          {
              id: 8,
              text: 'eight',
              children: [
                  {
                      id: 12,
                      text: 'twelve',
                      children: [
                          {
                              id: 13,
                              text: 'thirteen',
                              children: [],
                          },
                          {
                              id: 14,
                              text: 'fourteen',
                              children: [],
                          },
                          {
                              id: 15,
                              text: 'fifteen',
                              children: [],
                          },
                      ],
                  },
              ],
          },
                      {
              id: 9,
              text: 'nine',
              children: [],
          },
      ],
  },
  {
      id: 4,
      text: 'four',
      children: [],
  },
  {
      id: 5,
      text: 'five',
      children: [],
  },
];

class TreeCode {
  constructor(
      public id: number,
      public text: string,
      public children: MyNode[],
  ) {}
}

class TreeConvertor {
  private _tree: TreeCode[] = [];
  private _data: MyNode[] = [];

  constructor(data: MyNode[]) {
      this._data = data;
  }

  private _makeTree(array: MyNode[]): TreeCode[]  {
      const tree: TreeCode[] = [];
      for (let i = 0; i < array.length; i++) {
          const item = array[i];
          const  newTree = new TreeCode(item.id, item.text, []));
          if (item.children.length) {
              newTree.children = this._makeTree(item.children);
          }
          tree.push(newTree);
      }
      return tree;
  }

  public setTree(): void {
      this._tree = this._makeTree(this._data);
  }

  public getTree(): TreeCode[] {
      return this._tree;
  }
}

const tree = new TreeConvertor(data);
tree.setTree();
console.log(tree.getTree());
