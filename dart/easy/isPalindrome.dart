class CheckIfPalindrome {
  static String reverseStr(String str) {
    String reversed = '';
    int counter = 0;

    while (counter < str.length) {
      counter++;
      reversed += str[str.length - counter];
    }
    return reversed;
  }

  bool isPalindrome(String str) {
    var reversed = reverseStr(str);
    return str.toLowerCase() == reversed.toLowerCase();
  }
}
