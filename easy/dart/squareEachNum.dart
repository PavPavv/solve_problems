class SquareEachNum {
  static num result(num n) {
    if (n < 10) {
      return 0;
    }
    return num.parse(n
        .toString()
        .split('')
        .map((String strNum) => num.parse(strNum) * num.parse(strNum))
        .join(''));
  }
}
