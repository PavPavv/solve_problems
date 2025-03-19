"""
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
"""

class DAG:
    def __init__(self):
        self.graph = {}
    
    def add_edge(self, vertex_a, vertex_b):
        if vertex_a not in self.graph:
            self.graph[vertex_a] = []
        self.graph[vertex_a].append(vertex_b)
        if vertex_b not in self.graph:
            self.graph[vertex_b] = []
    def get_graph(self):
        return self.graph
    
    def depth_first_search(self, key):
        next_nodes = list()
        seen_nodes = set()

        next_nodes.append()

if __name__ == "__main__":
    print("Directed acyclic graph should be created below!")
    dag = DAG()
    g = dag.get_graph()
    print(g)
    
    dag.add_edge("a","b")
    dag.add_edge("a","c")
    
    dag.add_edge("b","d")
    dag.add_edge("b","e")

    dag.add_edge("c","f")
    
    dag.add_edge("e","i")
    dag.add_edge("e","j")
    dag.add_edge("e","k")
    dag.add_edge("e","l")
    
    dag.add_edge("f","g")

    dag.add_edge("g","h")
    
    print(g)
    print(g["a"])
