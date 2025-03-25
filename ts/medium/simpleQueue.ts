function main() {
  class Queue {
    private _queue: string[] = [];

    private _isInQueue(item: string): boolean {
      for (const elem of this._queue) {
        if (item.toLowerCase() === elem.toLowerCase()) {
          return true;
        }
      }
      return false;
    }

    get queue(): string[] {
      return this._queue;
    }

    enqueue(item: string): void {
      if (!this._isInQueue(item)) {
        this._queue.push(item);
      }
    }
    
    dequeue(): void {
      if (this._queue.length) {
        this._queue.shift();
      }
    }
  }

  const q = new Queue();
  console.log(q.queue);
  q.enqueue("Jack");
  console.log(q.queue);
  q.enqueue("Mag");
  console.log(q.queue);
  q.dequeue();
  console.log(q.queue);
}
main();