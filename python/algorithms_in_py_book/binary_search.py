nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

def is_found_binary_search(l, target):
    min = 0
    max = len(l) - 1

    while min <= max:
        mid = (min + max) // 2

        if target < l[mid]:
            max = mid - 1
        elif target > l[mid]:
            min = mid + 1
        else:
            return True

    return False
print(is_found_binary_search(nums,200))
print(is_found_binary_search(nums,2))

def binary_search_idx(l, target):
    min = 0
    max = len(l) - 1
    count = 0

    while min <= max:
        count += 1
        mid = (min + max) // 2
        diff = target - l[mid]
        if diff < 0:
            max = mid - 1
        elif diff > 0:
            min = mid + 1
        else:
            return mid
    print("count: "+ str(count))
    return -(min - 1)
print(binary_search_idx(nums,200))
print(binary_search_idx(nums,2))

