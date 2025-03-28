function bubbleSort(arr: number[]): number[] {
  const copy = [...arr];
  let isFinish = false;

  while (!isFinish) {
    for (let i = 1; i < copy.length; i++) {
      const prev = copy[i - 1];
      const current = copy[i];
      if (prev > current) {
        copy[i - 1] = current;
        copy[i] = prev;
      } else if (current === copy.length - 1 && prev < current) {
        isFinish = true;
      }
    }
  }
  return copy;
}
console.log(bubbleSort([3,1,4,2]))