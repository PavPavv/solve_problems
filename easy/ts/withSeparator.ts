export const withSeparator = (separator: string, ...args: number[]) => {
  return separator + args.join(separator);
};

console.log(withSeparator('!', 1, 2, 3, 4, 5));
// O(n)
