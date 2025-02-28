function shortLongShortStr(strA: string, strB: string): string {
  if (strA.length > strB.length) {
    return `${strB}${strA}${strB}`;
  } else {
    return `${strA}${strB}${strA}`;
  }
}
console.log(shortLongShortStr('Soon', 'Me'));
console.log(shortLongShortStr('you', 'Super'));
