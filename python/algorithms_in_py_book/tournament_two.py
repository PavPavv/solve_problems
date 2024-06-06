l_1 = [3,1,4,1,5,9,2,6]

def tournament_two(l=None):
    if l and isinstance(l, list) and len(l) > 1:
        N = len(l)
        winner = [None] * (N-1)
        loser = [None] * (N-1)
        prior = [-1] * (N-1)
        idx = 0

        for item in range(0,N,2):
            if l[item] < l[item + 1]:
                winner[idx] = l[item + 1]
                loser[idx] = l[item]
            else:
                winner[idx] = l[item]
                loser[idx] = l[item + 1]
            idx += 1
        m = 0

        while idx < N-1:
            if winner[m] < winner[m+1]:
                winner[idx] = winner[m + 1]
                loser[idx] = winner[m]
                prior[idx] = m+1
            else:
                winner[idx] = winner[m]
                loser[idx] = winner[m+1]
                prior[idx] = m
            m += 2
            idx += 1

        largest = winner[m]
        second = loser[m]
        m = prior[m]

        while m >= 0:
            if second < loser[m]:
                second = loser[m]
            m = prior[m]

        return (largest, second)
    return None
print(tournament_two(l_1))
# print(tournament_two([-1,-10,-20,-0.5,-167]))
print(tournament_two([1,2,50,50,300,49,5,0]))

# O(N + log 2 (N) - 2)