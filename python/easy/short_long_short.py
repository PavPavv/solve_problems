def short_long_short(s_1: str, s_2: str) -> str:
    result = ""
    if len(s_1) > len(s_2):
        return s_2 + s_1 + s_2
    else:
        return s_1 + s_2 + s_1
    return result
print(short_long_short("Soon", "Me"))
print(short_long_short("45", "1"))
