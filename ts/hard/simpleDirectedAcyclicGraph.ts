/**
A directed acyclic graph should store in memory via such python data structure as dictionary:
For example:
g = {
    "a": ["b","c"],
    "b": ["d","e"],
    "c": ["f"],
    "d": [],
    "e": ["i","j","k","l"],
    "f": ["g"],
    "g": ["h"],
    "h": [],
    "i": [],
    "j": [],
    "k": [],
    "l": []
}
*/

type Graph = {
  [key: string]: string[],
}

class DAG {
  graph: Graph = {};

  get result(): Graph {
    return this.graph;
  }

  addEdge(vertexA: string, vertexB: string): void {
    if (!(vertexA in this.graph)) {
      this.graph[vertexA] = [];
    }
    this.graph[vertexA].push(vertexB);
    if (!(vertexB in this.graph)) {
      this.graph[vertexB] = [];
    }
  }
}

function main() {
  const dag = new DAG();
  console.log(dag.result);

  dag.addEdge('a', 'b');
  dag.addEdge('a', 'c');

  dag.addEdge('b', 'd');
  dag.addEdge('b', 'e');

  dag.addEdge('c', 'f');

  dag.addEdge('e', 'i');
  dag.addEdge('e', 'j');
  dag.addEdge('e', 'k');
  dag.addEdge('e', 'l');

  dag.addEdge('f', 'g');

  dag.addEdge('g', 'h');
  
  console.log(dag.result);
}
main();