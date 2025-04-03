function convertDateToBinary(date: string): string {
  const arr = date.split('-').map((item) => Number(item));
  return `${arr[0].toString(2)}-${arr[1].toString(2)}-${arr[2].toString(2)}`;
};