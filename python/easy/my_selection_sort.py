a1 = [1,2,3,4]
a2 = [4,3,2,1]
a3 = [2,1,3,4]
b1 = [8,2,5,1,3,4,7,6]
b2 = [8,7,6,5,4,3,2,1]
b3 = [2,1,3,4,6,5,7,8]
c1 = [10,1,5,100,3,2,15,9] # [1,2,3,5,9,10,15,100]

def selection_sort(l):
  copy_l = l[::]
  for i in range(len(copy_l)):
    smallest_idx = i
    for j in range(smallest_idx + 1, len(copy_l)):
      if copy_l[j] < copy_l[smallest_idx]:
        smallest_idx = j
    swap = copy_l[i]
    copy_l[i] = copy_l[smallest_idx]
    copy_l[smallest_idx] = swap
  return copy_l
print(selection_sort([3,1,4,2]))
print(selection_sort(a1))
print(selection_sort(a2))
print(selection_sort(a3))
print(selection_sort(b1))
print(selection_sort(b2))
print(selection_sort(b3))
print(selection_sort(c1))