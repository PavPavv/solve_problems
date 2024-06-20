class Entry:
    def __init__(self, k, v):
        self.key = k
        self.value = v

class HashTable:
    def __init__(self, M=10):
        self.table = [None] * M
        self.M = M
        self.N = 0


    def get(self, k):
        hc = hash(k) % self.M
        while self.table[hc]:
            if self.table[hc].key == k:
                return self.table[hc].value
            hc = (hc + 1) % self.M
        return None
    
    def put(self, k, v):
        hc = hash(k) % self.M
        while self.table[hc]:
            if self.table[hc].key == k:
                self.table[hc].value = v
                return
            hc = (hc + 1) % self.M
        if self.N >= self.M - 1:
            raise RuntimeError('Table is full)
        self.table[hc] = Entry(k, v)
        self.N += 1

hash_table = HashTable(1000)
hash_table.put('Апрель',30)
hash_table.put('Май', 31)
print(hash_table.get('Август'))
print(hash_table.get('Апрель'))
