const seaArr = ['cod', 'herring', 'marling'];
const freshArr = ['asp', 'carp', 'ide', 'trout'];

function merge(sea: string[], fresh: string[]): string[] {
    const result: string[] = [];
    const copySea = [...sea];
    const copyFresh = [...fresh];
    const MOST_HEAVY_STR = 'zzzzzz';

    while (copySea.length || copyFresh.length) {
        const seaFish = copySea[0] || MOST_HEAVY_STR;
        const freshFish = copyFresh[0] || MOST_HEAVY_STR;

        if (seaFish < freshFish) {
            const fish = copySea.shift();
            if (fish) {
                result.push(fish);
            }
        } else if (seaFish > freshFish) {
            const fish = copyFresh.shift();
            if (fish) {
                result.push(fish);
            }
        }
    }
    return result;
}
console.log('Output: ', merge(seaArr, freshArr));