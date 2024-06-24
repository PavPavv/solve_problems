#   [[], [15], [], [], [], [5,26,19], [30]]

class Entry:
    def __init__(self, k, v):
        self.key = k
        self.value = v

class HashTable:
    def __init__(self, M=10):
        self.table = [[] for i in range(M)]
        self.M = M
        self.N = 0

    def get(self, k):
        hc = hash(k) % self.M
        for entry in self.table[hc]:
            if entry.key == k:
                return entry.value
        return None

    def put(self, k, v):
        hc = hash(k) % self.M
        for entry in self.table[hc]:
            if entry.key == k:
                entry.value = v
                return
        self.table[hc].append(Entry(k, v))
        self.N += 1

    def remove(self, k):
        hc = hash(k) % self.M
        for i, entry in ennumerate(self.table[hc]):
            if entry.key == k:
                del self.table[hc][i]
                self.N -= 1
                return entry.value
        return None
