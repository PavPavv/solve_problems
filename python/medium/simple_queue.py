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
    q = Queue()
    q.enqueue("Jack")
    q.enqueue("Mag")
    print(q.get_queue())
    q.dequeue()
    print(q.get_queue())

if __name__ == "__main__":
    main()