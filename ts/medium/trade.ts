const prices = [10, 1, 2, 4, 11];

function naiveTrade(p: number[]): [number, number, number] {
  let maxProfit = 0;
  let result: [number, number, number] = [0, 0, 0];
  for (const iPrice of p) {
    for (const jPrice of p) {
      const candidate = iPrice - jPrice;
      if (candidate > maxProfit) {
        maxProfit = candidate;
        result = [maxProfit, iPrice, jPrice];
      }
    }
  }
  return result;
}
console.log(naiveTrade(prices));  //  O(N^2)

function findMaxInArr(arr: number []): number {
  let max = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

function findMinInArr(arr: number []): number {
  let min = arr[0];
  for (const num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

function trade(p: number[]): number | number[] {
  if (p.length === 1) return 0;

  const mid = Math.floor(p.length / 2);
  const first = p.slice(0, mid);
  const second = p.slice(mid);
  const case3 = findMaxInArr(second) - findMinInArr(first);
  return findMaxInArr([...trade(first) as number[], ...trade(second) as number[], case3]);
}
console.log(trade(prices));  //  O(NlogN)

function tradeDp(p: number[]): [number, number] {
  let minPrices = [p[0]];
  let sellDayIdx = 0;
  let buyDayIdx = 0;
  let bestProfit = 0;

  for (let i = 0; i < p.length; i++) {
    const n = p[i];
    if (n < minPrices[i - 1]) {
      minPrices.push(n);
    } else {
      minPrices.push(minPrices[i -1]);
    }
    const profit = n - minPrices[i];
    if (profit > bestProfit) {
      bestProfit = profit;
      sellDayIdx = i;
      buyDayIdx = p.indexOf(minPrices[i]);
    }
  }
  return [buyDayIdx, sellDayIdx];
}
console.log(tradeDp(prices));

function tradeKadane(p: number[]): [number, number] {
  let minPrice = p[0];
  let sellDayIdx = 0;
  let buyDayIdx = 0;
  let bestProfit = 0;

  for (let i = 0; i < p.length; i++) {
    const n = p[i];
    if (n < minPrice) {
      minPrice = n;
      buyDayIdx = i;
    }
    const profit = n - minPrice;
    if (profit > bestProfit) {
      bestProfit = profit;
      sellDayIdx = i;
    }
  }
  return [buyDayIdx, sellDayIdx];
}
console.log(tradeKadane(prices));