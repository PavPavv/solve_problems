import 'checkBrackets.dart';
import 'findFirstAndSecondMax.dart';
import 'findPopularChar.dart';
import 'groupAnagramPairs.dart';
import 'findMinEven.dart';
import 'closureCounter.dart';
import 'fibonacci.dart';
import 'uniqueSums.dart';
import 'findLastIdx.dart';
import 'compareStr.dart';
import 'reverseStr.dart';
import 'findBlackSheep.dart';
import 'longestCommonPrefixSimple.dart';
import 'findBinaryTreeSum.dart';

void main() {
  BTreeNode bTree = {
    // root
    'value': 5,

    // parent
    'left': {
      'value': 4,

      // Internal node
      'left': {
        'value': 2,
        // leaf
        'left': {
          'value': 1,
          'left': null,
          'right': null,
        },
        'right': null,
      },

      // leaf
      'right': {
        'value': 3,
        'left': null,
        'right': null,
      },
    },

    // parent
    'right': {
      'value': 6,

      // leaf
      'left': {
        'value': 7,
        'left': null,
        'right': null,
      },

      // leaf
      'right': {
        'value': 8,
        'left': null,
        'right': null,
      },
    },
  } as BTreeNode;

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
  // print(findFirstAndSecondMax);
  var findMinEven = FindMinEven.result([10, -2, 1, 2, 3, 4, 5]);
  // print(findMinEven);
  var closureCounter = ClosureCounter.result(100);
  closureCounter();
  closureCounter();
  closureCounter();
  var test1 = closureCounter();
  // print(test1);
  var fib = Fibonacci.result(0);
  var fib1 = Fibonacci.result(1);
  var fib2 = Fibonacci.result(9);
  // print([fib, fib1, fib2]);
  var uniqueSums = UniqueSums.result([1, 2, 3, 4, 5, 6], 6);
  // print(uniqueSums);
  var findLastIdx = FindLastIdx.result('abbaao', 'a', 'b');
  // print(findLastIdx);
  var compareStr = CompareStr.result('banana', 'avocado');
  var compareStr1 = CompareStr.result('Banana', 'avocado');
  // print(compareStr);
  // print(compareStr1);
  var reverseStr = ReverseStr.result('test');
  // print(reverseStr);
  var findBlackSheep = FindBlackSheep(arr: [2, 4, 6, 8, 9, 10, 12]);
  // print(findBlackSheep.sheep);
  var longestCommonPrefixSimple =
      LongestCommonPrefixSimple(arr: ['flower', 'flow', 'Flight']);
  // print(longestCommonPrefixSimple.getPrefix());
  var findBinaryTreeSum = FindBinaryTreeSum();
  print(findBinaryTreeSum.getTreeSum(bTree));
}
