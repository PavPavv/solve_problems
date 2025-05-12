from typing import List, Dict, Any

TItem = Dict[str, Any]

def join_lists_by_unique_ids(l1: List[TItem], l2: List[TItem]) -> List[TItem]:
    combined_list = l1 + l2
    merged_map: Dict[int, TItem] = {}

    for item in combined_list:
        item_id = item["id"]
        if item_id in merged_map:
            merged_map[item_id] = {**merged_map[item_id], **item}
        else:
            merged_map[item_id] = item
    return sorted(merged_map.values(), key=lambda x: x["id"])


print(join_lists_by_unique_ids(
    [
        { "id": 1, "x": 1 },
        { "id": 2, "x": 9 },
    ],
    [{ "id": 3, "x": 5 }]
))
print(join_lists_by_unique_ids(
    [{ "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 }],
    [{ "id": 1, "b": { "c": 84 }, "v": [1, 3] }]
))
