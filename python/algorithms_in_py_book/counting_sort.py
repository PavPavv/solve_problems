"""
Сортировка подсчетом. Если известно, что некоторый (произвольный) спи­
сок А состоит только из целых чисел в диапазоне от О до М, его можно отсорти­
ровать за линейное время, используя дополнительную память размером М.
"""

def counting_sort(A, M):
    """
    Update A in place to be sorted in ascending order if all elements
    are guaranteed to be in the range 0 to and not including M.
    """
    counts = [0] * M
    for v in A:
        counts[v] += 1

    pos = 0
    v = 0
    while pos < len(A):
        for idx in range(counts[v]):
            A[pos+idx] = v
        pos += counts[v]
        v += 1

print(counting_sort([3,100,1,5,2,4,7], 7))
  