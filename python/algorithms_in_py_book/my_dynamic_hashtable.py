#   [[], [15], [], [], [], [5,26,19], [30]]

class Entry:
    def __init__(self, k, v):
        self.key = k
        self.value = v

class DynamicHashTable:
    def __init__(self, M=10):
        self.table = [[] for i in range(M)]
        if M < 1:
            raise ValueError('Hashtable storage must be at least 1')
        self.M = M
        self.N = 0
        self.load_factor = 0.75
        self.threshhold = min(M * self.load_factor, M-1)

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

        if self.N >= self.threshhold:
            self.resize(2 * self.M + 1)

    def remove(self, k):
        hc = hash(k) % self.M
        for i, entry in ennumerate(self.table[hc]):
            if entry.key == k:
                del self.table[hc][i]
                self.N -= 1
                return entry.value
        return None

    def resize(self, new_size):
        temp = DynamicHashTable(new_size)
        for bucket in self.table:
            for key, value in bucket:
                temp.put(key, value)
        self.table, self.M = temp.table, temp.M
        self.threshhold = self.load_factor * self.M
