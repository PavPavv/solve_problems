# Popular algorithms problems solutions in JS, TS, Dart and Python

- [Algorithms basic theory (ru)](https://github.com/PavPavv/MyJSCheatsheet/blob/master/js-code/algorithms/algorihms_ru.md)

> Since 15th medium problem I have stopped solving in 4 languages because it is overwhelming. TS now is a standard, which is a JS with types, so no need to write JS manually if it is not a language specific task. Dart is a very interesting and much well-organized language, than a TS, but since Dart is not a web standard and being used mostly for high abstract mobile development, there is not much sense in using it for a web. So I write in TS and Python mostly.

## JS-specified problems

1. Add new native method to the strings.
2. native Bind
3. native Call
4. native forEach
5. native string reverse
6. 5 ways of prototyping object in JS
7. my Object.create()
8. five(plus(seven(minus(three())))) which returns 9
9. methods chain
10. myReduce
11. myFilter
12. myMap
13. compose
14. calledOnce
15. addTwoPromises
16. sleep
17. cancellable
18. sortBy

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
27. linearSearch
28. countdown
29. mySelectionSort
30. mergeSort
31. shortLongShortStr
32. findMiddleNumInStr
33. greedyKnapsack
34. noIfNoTernary
35. differenceOfSums
36. scoreOfString
37. buildArray
38. convertTemperature
39. defangIPaddr
40. finalValueAfterOperations
41. numIdenticalPairs
42. getSneakyNumbers
43. numJewelsInStones
44. transformArray
45. shuffle
46. convertDateToBinary
47. chunkArray

## Medium

1. checkBrackets (Wirth)
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
13. longestCommonPrefixSimple\*  (>>> current repeat)
14. findBinaryTreeSum
15. findObjectArrsSumRec
16. binarySearch (Wirth)
17. tableSearch (Wirth list search)\*\*
18. simpleSearchString (Wirth)\*\*\*
19. insertionSort (Wirth)
20. binaryInsertionSort (Wirth)
21. powerSet
22. trade
23. findBinaryNode
24. curry
25. simpleQueue
26. bubbleSort
27. memoize
28. joinListsByUniqueIds

TODO:

- generate binary tree (class)
- binarySearch
- sber problem
- func('a.b.d.e') -> { a: { b: { d: { e: {} } } } }
- findDeepestLeavesSum (sumTree)
- flat array or object

## Hard

1. knuthMorrisPrattSubstringSearch (Wirth)
2. boyerMooreSubstrSearch (Wirth)
3. simpleDirectedAcyclicGraph

TODO:

- arrSubset
- rotate matrix at right up to 90 degrees
- LinkedList
- myStringIntoSmsArr

---

## Total

For now: **96** solved programming problems with different ranges of difficulty (JS-specified(18), easy(47), medium(28), hard(3))

### Notes

> \*longestCommonPrefixSimple - marked simple just because we assume that the problem is to find most common prefix in the array of words which are definitely all have something in common, like 'flower', 'flow', 'Flight'... It is not a suitable solution for a hard big search through any words, like 'red', ' ', 'Flight', '#@@@@!', 'm', 'flow', 'sdfSsgsdDghj gsd 12', '4560000456.45', 'flower'...

> \*\* not completed

> \*\*\* implementing Dijkstra loop

> Since 15th medium problem I have stopped solving in 4 languages 'cuz it's overwhelming. TS now is a JS with types, so no need to write ES5 manually if it is not a language specific tasks. Dart is a very interesting and much well-organized language than a JS or TS, but since Dart is not a web standard and being used mostly for high abstract mobile development, there is not much sense in learning and using it instead of JS or Java/Kotlin.

### Tips

1. Compile tsc, run and remove js result in the single bash command line:

```bash
tsc fileName.ts && node fileName.js && rm -rf fileName.js
```

or you may use \*_run_ts_file.sh_ file in ts catalog in order to use it in a command with a single argument of file name:

Add exec rights to file (once):

```bash
chmod +x run_ts_file.sh
```

```bash
./run_ts_file.sh tsFileNameWithoutExtension
```

### Wirth book notes

1. Table search looks for first target entrance in an array. It is like a binary search: we should return left counter of the search.

2. Dijkstra loop implemented in JS, TS, Python and etc. for example, like while loop with if/else condition branches

```python
  while (i <= N-M and j < M):
    if text[i+j] == pattern[j]:
      j += 1
    else:
      i += 1
      j = 0
```
