import 'checkBrackets.dart';
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
  print(groupAnagramPairs);
}
