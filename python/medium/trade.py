import math

prices_1 = [10, 1, 2, 4, 11]
prices_2 = [27,53,7,25,33,2,32,47,43]

def trade_slow(l):
    max_income = 0
    best_prices = [0,0]
    for price in l:
        for item in l:
            candidate = price - item
            if candidate > max_income:
                max_income = candidate
                best_prices[0] = item
                best_prices[1] = price
    return max_income, best_prices
print(trade_slow(prices_1))    # O(n^2)

def trade(l):
    if len(l) == 1:
        return 0
    mid = math.floor(len(l) / 2)
    former = l[0:mid]
    latter = l[mid:]
    case_3 = max(latter) - min(former)
    return max(trade(former), trade(latter), case_3)
print(trade(prices_1))  # O(nlogn)

def trade_dp(p):
    if not p:
        return None
    min_prices = [p[0]]
    sell_day_idx = 0
    buy_day_idx = 0
    best_profit = 0

    for i in range(1, len(p)):
        n = p[i]
        if n < min_prices[i-1]:
            min_prices.append(n)
        else:
            min_prices.append(min_prices[i-1])
            
        profit = n - min_prices[i]
        if profit > best_profit:
            sell_day_idx = i
            best_profit = profit
            buy_day_idx = p.index(min_prices[i])
    return (buy_day_idx, sell_day_idx)
print(trade_dp(prices_1))   # O(n)

def trade_kadane(p):
    min_price = p[0]
    sell_day_idx = 0
    buy_day_idx = 0
    best_profit = 0

    for i in range(1, len(p)):
        if p[i] < min_price:
            min_price = p[i]
            buy_day_idx = i
        profit = p[i] - min_price

        if profit > best_profit:
            sell_day_idx = i
            best_profit = profit
    return (buy_day_idx,sell_day_idx)
print(trade_kadane(prices_1))
