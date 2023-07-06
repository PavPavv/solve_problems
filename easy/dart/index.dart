import 'findFirstLeftTargetIdx.dart';
import 'findFirstRightTarget.dart';
import 'isPalindrome.dart';
import 'findTargetElemByCount.dart';
import 'countVowels.dart';
import 'rangeSum.dart';
import 'findMiddleChar.dart';
import 'squareEachNum.dart';
import 'replaceAll.dart';
import 'findPrevDuplicate.dart';
import 'findDuplicates.dart';
import 'getAlphabetLetterIdx.dart';
import 'findDuplicatesInRange.dart';
import 'removeVowels.dart';

void main() {
  var firstLeft = FindFirstLeftTargetIdx.result([1, 2, 3, 1, 2, 3], 3);
  print(firstLeft); //  2

  var firstRight = FindFirstRightTarget.result([1, 2, 3, 1, 2, 3], 3);
  print(firstRight); //  [5, 3]

  var isPalindrome = CheckIfPalindrome().isPalindrome('ann');
  var isPalindrome1 = CheckIfPalindrome().isPalindrome('anA');
  print(isPalindrome);
  print(isPalindrome1);

  var findTargetElemByCount =
      FindTargetElemByCount.result(['Mark', 'John', 'Anna', 'Maria'], 4);
  print(findTargetElemByCount);

  var countVowels = CountVowels.result('wolf');
  print(countVowels);

  var rangeSum = RangeSum.result(3, 5); //  12
  print(rangeSum);

  var middleChar = FindMiddleChar.result('test');
  var middleChar1 = FindMiddleChar.result('testing');
  print(middleChar);
  print(middleChar1);

  var squareEachNum = SquareEachNum.result(25);
  print(squareEachNum);

  var replaceAll = ReplaceAll.result('te#s#t#', '#');
  print(replaceAll);

  var findPrevDuplicate = FindPrevDuplicate.result([1, 2, 3, 3, 4, 5]);
  print(findPrevDuplicate);

  var findDuplicates = FindDuplicates.result([1, 2, 3, 3, 4, 5, 5, 100]);
  print(findDuplicates);

  var getAlphabetLetterIdx = GetAlphabetLetterIdx.result('a');
  print(getAlphabetLetterIdx);

  var findDuplicatesInRange = FindDuplicatesInRange.result(
      [0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 0, 9, 9, 9, 10], 1, 5, 0);
  print(findDuplicatesInRange);

  var removeVowels = RemoveVowels.result("This website is for losers LOL!");
  print(removeVowels);
  var removeVowels1 = RemoveVowels.result(
      "No offense but,\nYour writing is among the worst I've ever read");
  print(removeVowels1);
  var removeVowels2 = RemoveVowels.result("What are you, a communist?");
  print(removeVowels2);
}
