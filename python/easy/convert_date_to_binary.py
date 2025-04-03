def convert_date_to_binary(date: str) -> str:
    l = date.split('-')
    result = "{}-{}-{}".format(format(int(l[0]),"b"), format(int(l[1]),"b"), format(int(l[2]),"b"))
    return result
print(convert_date_to_binary("2080-02-29"))