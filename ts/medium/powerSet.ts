const flowers = ['', 'a', 'b'];

function powerArr(data: string[]): string[][] {
  let fragrances: string[][]  = [[]];


  for (let i = 0; i < data.length; i++) {
    const flower = data[i];
    const newFragrances: string[][]  = [];

    for (const fragrance of fragrances) {
      newFragrances.push([...fragrance, flower]);
    }
    fragrances = [...fragrances, ...newFragrances];
  }
  return fragrances;
}
console.log(powerArr(flowers));

function powerSet(data: string[]): Set<Set<string>> {
  let fragrances: Set<Set<string>> = new Set();
  fragrances.add(new Set());

  for (const flower of data) {
    const newFragrances: Set<Set<string>> = new Set();

    for (const fragrance of fragrances) {
      const newFragrance = new Set(fragrance);
      newFragrance.add(flower);
      newFragrances.add(newFragrance);
    }

    for (const item of newFragrances) {
      fragrances.add(item);
    }
  }

  return fragrances;
}
console.log(powerSet(flowers));