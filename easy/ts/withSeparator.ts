export const withSeparator = (separator: string, ...args: number[]) => {
  return separator + args.join(separator);
};
