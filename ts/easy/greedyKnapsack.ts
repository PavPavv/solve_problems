type TKnapsackItem = {
  id: number;
  weight: number;
  name: string;
}

const data: TKnapsackItem[] = [
  {
    id: 1,
    weight: 1,
    name: 'a chocolate',
  },
  {
    id: 2,
    weight: 1,
    name: 'a bottle of water',
  },
  {
    id: 3,
    weight: 1,
    name: 'an empty cup',
  },
  {
    id: 4,
    weight: 2,
    name: 'a piece of gold',
  },
  {
    id: 5,
    weight: 2,
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