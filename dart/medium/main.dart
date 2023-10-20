import 'checkBrackets.dart';
import 'findFirstAndSecondMax.dart';
import 'findPopularChar.dart';
import 'groupAnagramPairs.dart';

void main() {
  var checkBrackets = CheckBrackets.result('(){}[]');
  // print(checkBrackets);
  var checkBrackets1 = CheckBrackets.result('([{}])');
  // print(checkBrackets1);
  var checkBrackets2 = CheckBrackets.result('([{}{}{}])');
  // print(checkBrackets2);
  var checkBrackets3 = CheckBrackets.result('([{}{}{}]');
  // print(checkBrackets3);
  var checkBrackets4 = CheckBrackets.result('[{}]]]');
  // print(checkBrackets4);
  var checkBrackets5 = CheckBrackets.result(' ');
  // print(checkBrackets5);
  var groupAnagramPairs =
      GroupAnagramPairs.result(['ann', 'nan', 'd', 'pie', 'cort', 'iep']);
  // print(groupAnagramPairs);
  var popularChar = FindPopularChar.result('ababa');
  // print(popularChar);
  var findFirstAndSecondMax =
      FindFirstAndSecondMax.result([10, -2, 1, 2, 3, 4, 5]);
  print(findFirstAndSecondMax);
}
