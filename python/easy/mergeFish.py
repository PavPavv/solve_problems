from typing import List

sea_list = ["cod", "herring", "marling"]
fresh_list = ["asp", "carp", "ide", "trout"]

def merge(sea: List[str], fresh: List[str]) -> List[str]:
    result = []
    copy_sea = sea[::]
    copy_fresh = fresh[::]
    MOST_HEAVY_STR = 'zzzzzz'

    while len(copy_sea) > 0 or len(copy_fresh) > 0:
        sea_fish = MOST_HEAVY_STR
        fresh_fish = MOST_HEAVY_STR

        if len(copy_sea):
            sea_fish = copy_sea[0]
        if len(copy_fresh):
            fresh_fish = copy_fresh[0]

        if sea_fish < fresh_fish:
            fish = copy_sea.pop(0)
            if fish:
                result.append(fish)
        elif sea_fish > fresh_fish:
            fish = copy_fresh.pop(0)
            if fish:
                result.append(fish)
    return result
print(merge(sea_list, fresh_list))
