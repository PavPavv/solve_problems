const lcp = (arr: string[]) => {
    const preparedArr = arr.map((word: string) => word.trim().toLowerCase());
    // cut out first word in the array to variable
    const firstAttempt = preparedArr.shift() ?? '';
    let counter = 0;
    let result = '';

    while (counter <= firstAttempt.length) {
        let candidateChar = firstAttempt[counter];

        for (const word of preparedArr) {
            if (word[counter] !== candidateChar) {
                return result;
            }
        }
        result += candidateChar;
        counter++;
    }
    return result;
};

console.log(lcp(['flower', 'flow', 'Flight']));
