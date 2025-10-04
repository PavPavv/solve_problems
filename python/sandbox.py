class Queue:
    def __init__(self):
        self.queue = list()

    def enqueue(self, item):
        if item not in self.queue:
            self.queue.append(item)

    def dequeue(self):
        if len(self.queue):
            self.queue = self.queue[1:]


    def get_queue(self):
        return self.queue

def main():
    # q = Queue()
    # q.enqueue("Jack")
    # q.enqueue("Mag")
    # print(q.get_queue())
    # q.dequeue()
    # print(q.get_queue())
    
    def binary_search(l, target):
        low = 0
        high = len(l) - 1

        while low <= high:
            mid = (low+high) // 2
            guess = l[mid]

            if guess == target:
                return mid
            elif guess > target:
                high = mid - 1
            else:
                low = mid + 1
        return None
    print(binary_search([1,3,5,7,9], 3))
    print(binary_search([1,3,5,7,9], -1))

if __name__ == "__main__":
    main()
