/// <reference lib="ES2015" />

export const main = (): void => {
  // ---BINARY SEARCH---

  const bSearch = (arr: number[], target: number): number => {
    const uniqueSet = new Set<number>(arr);
    const sortedUniqueArr = Array.from(uniqueSet).sort((a, b) => a - b);
    let l = 0;
    let r = sortedUniqueArr.length - 1;
    
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      const midItem = sortedUniqueArr[mid];

      if (midItem === target) {
        return mid;
      } else if (midItem > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return -1;
  };
  // console.log(bSearch([2,3,4,5,6,7.7,8,9,10], 9));
  // console.log(bSearch([3,2,4,5,6,8,7,9,10], 9));
  // console.log(bSearch([2,3,4,5,6,7.7,8,9,10], -2));

  const recBSearch = (arr: number[], target: number, l = 0, r: number | null = null): number => {
    if (r === null) {
      r = arr.length - 1;
    }
    if (l > r) return -1;

    let mid = Math.floor((l + r) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      return recBSearch(arr, target, l, mid - 1);
    } else {
      return recBSearch(arr, target, mid + 1, r);
    }
  };
  // console.log(bSearch([2,3,4,5,6,7.7,8,9,10], 9));
  // console.log(bSearch([3,2,4,5,6,8,7,9,10], 9));
  // console.log(bSearch([2,3,4,5,6,7.7,8,9,10], -2));

  // --SELECTION SORT--

  // my
  type TArtist = {
    id: number;
    name: string;
    counter: number;
  }

  const DATA: TArtist[] = [
    {
      id: 1,
      name: 'Metallica',
      counter: 1000,
    },
    {
      id: 2,
      name: 'The White Stripes',
      counter: 99,
    },
    {
      id: 3,
      name: 'Limp Bizkit',
      counter: 700,
    },
    {
      id: 4,
      name: 'Norah Jones',
      counter: 7,
    },
    {
      id: 5,
      name: 'Kings Of Leon',
      counter: 999,
    },
  ];

  //console.log(DATA.sort((a, b) => a.counter - b.counter));

  // --RECURSION--

  const findMaxIdx = (nums: number[]): number => {
    if (!nums.length) return -1;

    let max = nums[0];
    let idx = 0;
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max) {
        idx = i;
      }
    }
    return idx;
  };

  const artistsSelectionSort = (data: TArtist[]): TArtist[] => {
    const copy: TArtist[] = [...data];
    const result: TArtist[] = [];
    
    for (let i = 0; i < data.length; i++) {
      const maxIdx = findMaxIdx(copy.map((artist: TArtist) => artist.counter));
      const targetArr = copy.splice(maxIdx, 1);
      if (targetArr.length) {
        result.push(targetArr[0]);
      }
    }

    return result;
  };
  // console.log(artistsSelectionSort(DATA));


  // const sum = (arr: number[]): number => {
  //   let result = 0;
  //   arr.forEach((n) => {
  //     result += n;
  //   })
  //   return result;
  // }
  const sum = (arr: number[]): number => {
    if (arr.length === 0) return 0;
    return arr.shift()! + sum(arr);  
  }
  // console.log(sum([2,4,6]));

  const arrLen = <T>(arr: T[]): number => {
    // let res = 0;
    // arr.forEach(() => {
    //   res++;
    // });
    // return res;

    if (arr.length === 0) return 0;
    return [arr.shift()].length + arrLen(arr);
  }
  // console.log(arrLen([2,4,6])); // 3

  const findMax = (arr: number[]): number => {
    if (arr.length === 2) {
      return Math.max(...arr);
    }
    const first = arr.shift()!;
    const subMax = findMax(arr);
    return first > subMax ? first : subMax;
  };
  // console.log(findMax([10, 100, 2, 4, 6]));

  //  --QUICK SORT--

  const quickSort = (arr: number[]): number[] => {
    if (arr.length < 2) {
      return arr;
    } else {
      const pivot = arr[Math.floor(arr.length / 2)];
      const subArr1 = arr.filter((num) => num < pivot);
      const subArr2 = arr.filter((num) => num > pivot);
      return [...quickSort(subArr1), pivot, ...quickSort(subArr2)];
    }
  };
  //console.log(quickSort([1,2,3,9,8,100,4,5,99]));
  //console.log(quickSort([2,1,3,5,4]));

  // --MERGE SORT--

  // --BUBBLE SORT--

  // Graph
  // Interfaces
  class Graph<T> {
    private _graph: Record<string, T[]> = {};

    constructor() {}

    addNode(node: string): void {
      this._graph[node] = [];
    }

    addNeighborsToNode(node: string, neighbors: T | T[]): void {
      if (this._graph[node]) {
        if (Array.isArray(neighbors)) {
          neighbors.forEach((n) => this._graph[node].push(n));
        } else {
          this._graph[node].push(neighbors);
        }
      }
    }

    getGraph(): Record<string, T[]> {
      return this._graph;
    }

    getNode(name: string): T[] {
      if (this._graph[name]) {
        return this._graph[name];
      }
    }
  }

  // --Queue--

  class Queue<T> {
    private _queue: T[] = [];

    constructor(arr?: T[]) {
      if (arr && arr.length) {
        this._queue = [...arr];
      }
    }

    getQueue(): T[] {
      return this._queue;
    }

    isEmpty(): boolean {
      return !Boolean(this.len());
    }

    len(): number {
      return this._queue.length;
    }

    enqueue(newItem: T): void {
      this._queue.push(newItem);
    }

    dequeue(): T {
      if (this.len) {
        return this._queue.shift();
      }
    }
  }

  // Implementation
  // generate custom graph
  const graph = new Graph<string>();
  graph.addNode('Pav');
  graph.addNode('Mavrodi');
  graph.addNode('Ma');
  graph.addNode('Brother');

  ['Ma', 'Jack_animal', 'Mavrodi', 'Brother'].forEach((node) => graph.addNeighborsToNode('Pav', node));
  ['Sasha', 'Vinokurov', 'Berest'].forEach((node) => graph.addNeighborsToNode('Mavrodi', node));
  ['Ma', 'Wife', 'Paulina', 'Max'].forEach((node) => graph.addNeighborsToNode('Brother', node));
  ['YF', 'Maggie_animal'].forEach((node) => graph.addNeighborsToNode('Ma', node));
  ['Kesha_animal'].forEach((node) => graph.addNeighborsToNode('Sasha', node));

  const pavNode: string[] = graph.getNode('Pav');

  // console.log(graph.getGraph());
  // console.log(pavNodes);

  // search through the graph via BFS with queue
  const breadthFirstSearch = <T>(g: Graph<T>, node: T[], fn: (val: T) => boolean): T | null => {
    const queue = new Queue<T>(node);
    const searched = new Set();

    while (!queue.isEmpty()) {
      const n = queue.dequeue();
      if (!searched.has(n)) {
        if (fn(n)) {
          return n;
        } else {
          searched.add(n);
          const nNodes = g.getNode(n as string);
          nNodes.forEach((node) => {
            queue.enqueue(node);
          });
        }
      }
    }

    return null;
  }

  function isAnimal(value: string): boolean {
    const animalSign = value.split('_');
    if (animalSign.length > 1 && animalSign[1].toLowerCase() === 'animal') {
      return true;
    }
    return false;
  }
  // console.log(breadthFirstSearch<string>(graph, pavNode, isAnimal));


  // --TREES--

  // Более компактно для обхода
  const graph11 = {
    'home': ['pav'],
    'pav': ['documents'], 
    'documents': []
  };

  // const fileSystem = {
  //   '/': ['home', 'etc', 'usr'],          // корень
  //   'home': ['user1', 'user2'],           // поддиректории home
  //   'user1': ['documents', 'downloads'],  // поддиректории user1
  //   'user2': ['music', 'videos'],         // поддиректории user2
  //   'documents': ['file1.txt', 'file2.doc'],
  //   'downloads': ['archive.zip'],
  //   'etc': ['config', 'network'],
  //   'usr': ['bin', 'lib', 'share'],
  //   'config': ['app1.conf', 'app2.conf'],
  //   'network': ['interfaces'],
  //   'bin': ['bash', 'ls', 'cat'],
  //   'lib': ['libc.so', 'libstdc++.so'],
  //   'share': ['man', 'doc'],
  //   'music': ['song1.mp3', 'song2.mp3'],
  //   'videos': ['movie1.mp4'],
  //   // файлы (листья)
  //   'file1.txt': [], 'file2.doc': [], 'archive.zip': [],
  //   'app1.conf': [], 'app2.conf': [], 'interfaces': [],
  //   'bash': [], 'ls': [], 'cat': [],
  //   'libc.so': [], 'libstdc++.so': [],
  //   'man': [], 'doc': [],
  //   'song1.mp3': [], 'song2.mp3': [], 'movie1.mp4': []
  // };

  const fsGraph = new Graph<string>();
  fsGraph.addNode('pics');
  fsGraph.addNeighborsToNode('pics', ['2001', 'odyssey.png']);
  fsGraph.addNode('2001');
  fsGraph.addNeighborsToNode('2001', ['a.jpg', 'b.jpeg', 'screenplay.txt']);
  
  fsGraph.addNode('odyssey.png');
  fsGraph.addNode('a.jpg');
  fsGraph.addNode('b.jpeg');
  fsGraph.addNode('screenplay.txt');
  console.log(fsGraph.getGraph());

  function isFileExt(name: string): boolean {
    return name.split('.').length > 1 ? true : false;
  }

  const displayFSTreeFiles = <T>(g: Graph<T>, target: string): string => {
    const targetNode = g.getNode(target);
    const queue = new Queue<T>(targetNode);
    const result: string[] = [];

    while (!queue.isEmpty()) {
      const candidate = queue.dequeue();
      if (isFileExt(candidate as string)) result.push(candidate as string);
      else {
        const candidateNodes = g.getNode(candidate as string);
        candidateNodes.forEach((n) => queue.enqueue(n));
      }
    }
    return result.join(', ');
  }
  // console.log(displayFSTreeFiles<string>(fsGraph, 'pics'));

    type TNode = {
    name: string;
    children: TNode[];
    type: 'file' | 'dir';
  };
  const testFilesTree1: TNode[] = [
    {
      name: 'home',
      type: 'dir',
      children: [
        {
          name: 'pav',
          type: 'dir',
          children: [
            {
              name: 'documents',
              type: 'dir',
              children: [
                {
                  name: 'payroll.txt',
                  type: 'file',
                  children: [],
                }
              ],
            },
            {
              name: 'music',
              type: 'dir',
              children: [
                {
                  name: 'The_Used',
                  type: 'dir',
                  children: [
                    {
                      name: 'Paralized.mp3',
                      type: 'file',
                      children: [],
                    }
                  ],
                },
                {
                  name: 'metallica',
                  type: 'dir',
                  children: [
                    {
                      name: 'Blackened.mp3',
                      type: 'file', 
                      children: [],
                    },
                                        {
                      name: 'Frantic.mp3',
                      type: 'file', 
                      children: [],
                    },
                  ],
                }
              ],
            },
          ],
        }
      ],
    },
  ];

  const displayFSTreeFilesRec = (data: TNode[]) => {
    for (const item of data) {
      if (item.children.length) {
        displayFSTreeFilesRec(item.children);
      } else {
        console.log(item.name);
      }
    }
  };
  console.log(displayFSTreeFilesRec(testFilesTree1));
};
main();