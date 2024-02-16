# Popular algorithms problems solutions in JS, TS, Dart and Python

## JS-specified problems

1. Add new native method to the strings.
2. native Bind
3. native Call
4. native forEach
5. native string reverse
6. 5 ways of prototyping object in JS
7. my Object.create()
8. five(plus(seven(minus(three())))) which returns 9

TODO:

- myMap

## Easy

1. findFirstLeftTargetIdx
2. findFirstRightTarget
3. isPalindrome
4. findTargetElemByCount
5. countVowels
6. rangeSum
7. findMiddleChar
8. squareEachNum
9. removeVowels
10. replaceAll
11. findPrevDuplicate
12. findDuplicates
13. findDuplicatesInRange
14. countDuplicates
15. getAlphabetLetterIdx
16. withSeparator
17. isEmptyObj
18. findMaxArrVal
19. shortestStr
20. showAtIntervals
21. showAtAutoIntervals
22. checkBracketsSimple
23. calcChars
24. buildEgyptTriangle
25. fizzBuzz
26. squareGrid

## Medium

1. checkBrackets
2. groupAnagramPairs
3. findPopularChar
4. findFirstAndSecondMax
5. findMinEven
6. closureCounter
7. fibonacci
8. uniqueSums
9. findLastIdx
10. compareStr
11. reverseStr
12. findBlackSheep
13. longestCommonPrefixSimple\*
14. findBinaryTreeSum
15. findObjectArrsSumRec

TODO:

- generate binary tree (class)
- binarySearch
- sber problem
- func('a.b.d.e') -> { a: { b: { d: { e: {} } } } }
- findDeepestLeavesSum (sumTree)
- flat array or object

## Hard

TODO:

- arrSubset
- rotate matrix at right up to 90 degrees
- LinkedList
- Queue
- myStringIntoSmsArr

---

### Notes

longestCommonPrefixSimple - marked simple just because we assume that the problem is to find most common prefix in the array of words which are definitely all have something in common, like 'flower', 'flow', 'Flight'...
It is not a suitable solution for a hard big search through any words, like 'red', ' ', 'Flight', '#@@@@!', 'm', 'flow', 'sdfSsgsdDghj gsd 12', '4560000456.45', 'flower'...
