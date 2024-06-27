def unique_sums(arr, target):
  hash = {}
  list = []
  for num in arr:
    hash[num] = num
  for num in hash:
    secondNum = target - num
    if secondNum in hash and secondNum > num:
      list.append([hash[num], secondNum])
  return list


print(unique_sums([1, 2, 3, 4, 5, 6], 6))

class FindArrSum():

    def __init__(self, l=None, target=0):
        self.l = l
        self.target = target

    def _check_num(self, num=0):
        if not isinstance(num, int):
            return False
        return True

    def _check_arr(self):
        if not isinstance(self.l, list) or len(self.l) < 2:
            return False
        return True

    def find_sum_1(self):
        if not self._check_arr() or not self._check_num(self.target):
            return []
        hash = {}
        result = []

        for num in self.l:
            hash[num] = 0

        for key in hash:
            second_num = self.target - key
            if second_num in hash and second_num > key:
                result.append([key, second_num])
        return result

    def find_sum_2(self):
        if not self._check_arr() or not self._check_num(self.target):
            return []
        num_set = set(self.l)
        result = []

        for item in num_set:
            second_num = self.target - item
            if second_num in num_set and second_num > item:
                result.append([item, second_num])
        return result

findSum = FindArrSum([4,5,6,1,2,3], 6)
r_1 = findSum.find_sum_1()
r_2 = findSum.find_sum_2()
print(r_1)
print(r_2)
