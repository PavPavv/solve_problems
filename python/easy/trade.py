import math

def trade(l):
    if len(l) == 1:
        return 0
    mid = math.floor(len(l) / 2)
    former = l[0:mid]
    latter = l[mid:]
    case_3 = max(latter) - min(former)
    return max(trade(former), trade(latter), case_3)
print(trade([27,53,7,25,33,2,32,47,43]))
