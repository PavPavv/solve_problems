def defang_ip(address: str) -> str:
        return address.replace(".","[.]")