type TKnapsackItem = {
  id: number;
  weight: number;
  price?: number;
  name: string;
}

const data: TKnapsackItem[] = [
  {
    id: 1,
    weight: 1,
    price: 12,
    name: 'a chocolate',
  },
  {
    id: 2,
    weight: 1,
    price: 10,
    name: 'a bottle of water',
  },
  {
    id: 3,
    weight: 1,
    price: 3,
    name: 'an empty cup',
  },
  {
    id: 4,
    weight: 2,
    price: 120,
    name: 'a piece of gold',
  },
  {
    id: 5,
    weight: 2,
    price: 300,
    name: 'a rare picture',
  },
];

function greedyKnapsack(items: TKnapsackItem[], maxWeight: number): TKnapsackItem[] {
  let bagWeight = 0;
  const bagItems: TKnapsackItem[] = [];

  for (const item of items) {
    if (bagWeight + item.weight <= maxWeight) {
      bagWeight += item.weight;
      bagItems.push(item);
    }
  }
  return bagItems;
}
console.log(greedyKnapsack(data, 4));


const itemsPrices = data.map((item) => item?.price);
const itemsWeight = data.map((item) => item.weight);

function greedyKnapsackTrade(itemIdx: number, maxWeight: number): any {
  if (maxWeight === 0 || itemIdx < 0) return 0;
  if (itemsWeight[itemIdx] > maxWeight) return greedyKnapsackTrade(itemIdx - 1, maxWeight);
  return Math.max(
    greedyKnapsackTrade(itemIdx - 1, maxWeight),
    greedyKnapsackTrade(itemIdx - 1, maxWeight - itemsWeight[itemIdx]) + itemsPrices[itemIdx],
  );
}
console.log(greedyKnapsackTrade(data.length - 1, 4));