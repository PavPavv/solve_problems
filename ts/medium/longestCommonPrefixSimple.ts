const lcp = (arr: string[]): string => {
    const preparedArr = arr.slice().map((item: string) => item.toLowerCase().trim());
    let counter = 0;
    let result = '';
    const firstAttempt = preparedArr.shift() ?? '';

    while (counter <= preparedArr.length) {
        let candidateChar = firstAttempt[counter] ?? '';
        for (const word of preparedArr) {
            if (candidateChar !== word[counter]) {
                return result;
            }
        }
        result += candidateChar;
        counter++;
    }
    return result;
};
console.log(lcp([]));
console.log(lcp(['flower']));
console.log(lcp(['']));
console.log(lcp(['', '', '']));
console.log(lcp(['flower', 'flow', 'Flight']));
