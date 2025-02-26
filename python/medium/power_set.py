from typing import List, Set, FrozenSet

flowers = ['', 'a', 'b'];

def power_list(data: List[str]) -> Set[Set[str]]:
    fragrances = [[]]

    for flower in data:
        new_fragrances = []
        
        for fragrance in fragrances:
            new_fragrances.append(fragrance + [flower])
        fragrances = fragrances + new_fragrances
    return fragrances
print(power_list(flowers))

def power_set(data: Set[str]) -> Set[FrozenSet[str]]:
    fragrances = {frozenset()}

    for flower in data:
        new_fragrances = set()

        for fragrance in fragrances:
            new_fragrances.add(fragrance.union({flower}))
        fragrances.update(new_fragrances)
    return fragrances
print(power_set({'', 'a', 'b'}))
