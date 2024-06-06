def my_two_max(l=None):
    if l and isinstance(l, list) and len(l) > 1:
        first_max, second_max = l[:2]
        if second_max > first_max:
            first_max, second_max = second_max, first_max

        for item in l[2:]:
            if item > first_max:
                second_max, first_max = first_max, item
        return (first_max,second_max)
    return None
print(my_two_max(1))
print(my_two_max([]))
print(my_two_max([-1,-10,-20,-0.5,-167]))
print(my_two_max([1,2,50,50,300,49,5]))
#   O(2N - 3)

def two_max(l=None):
    if l and isinstance(l, list) and len(l) > 1:
        first_max, second_max = l[:2]
        if second_max > first_max:
            first_max, second_max = second_max, first_max

        for item in l[2:]:
            if first_max < item:
                first_max, second_max = item, first_max
            elif second_max < item:
                second_max = item
        return (first_max,second_max)
    return None
print(two_max(1))
print(two_max([]))
print(two_max([-1,-10,-20,-0.5,-167]))
print(two_max([1,2,50,50,300,49,5]))
#   O(2N - 3)

def sorting_two(l=None):
    if l and isinstance(l, list) and len(l) > 1:
        return tuple(sorted(l, reverse=True)[:2])
    return None
print(sorting_two(1))
print(sorting_two([]))
print(sorting_two([-1,-10,-20,-0.5,-167]))
print(sorting_two([1,2,50,50,300,49,5]))
#   O(N)

def double_two(l=None):
    if l and isinstance(l, list) and len(l) > 1:
        my_max = max(l)
        copy = l[:]
        copy.remove(my_max)
        return (my_max, max(copy))
    return None
print(double_two(1))
print(double_two([]))
print(double_two([-1,-10,-20,-0.5,-167]))
print(double_two([1,2,50,50,300,49,5]))
#   O(N)

def mutable_two(l=None):
    if l and isinstance(l, list) and len(l) > 1:
        idx = max(range(len(l)), key=l.__getitem__)
        my_max = l[idx]
        del l[idx]
        second = max(l)
        l.insert(idx, my_max)
        return (my_max, second)
    return None
print(double_two(1))
print(double_two([]))
print(double_two([-1,-10,-20,-0.5,-167]))
print(double_two([1,2,50,50,300,49,5]))