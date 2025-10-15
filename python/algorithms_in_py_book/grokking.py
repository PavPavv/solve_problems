def main():
    print("Script works!")

    data = [
        {
            "id": 1,
            "name": "Metallica",
            "counter": 1000,
        },
        {
            "id": 2,
            "name": "The White Stripes",
            "counter": 99,
        },
        {
            "id": 3,
            "name": "Norah Jones",
            "counter": 7,
        },
        {
            "id": 4,
            "name": "Limp Bizkit",
            "counter": 700,
        },
        {
            "id": 5,
            "name": "Kings Of Leon",
            "counter": 999,
        }
    ]

    def findMinIdx(arr):
        min = arr[0]
        idx = 0

        for i in range(1, len(arr)):
            if arr[i] < min:
                min = arr[i]
                idx = i
        return idx
    #print(findMinIdx([100,2,3,4,700,5]))

    def findArtistMinIdx(arr):
        smallest = arr[0]
        idx = 0

        for i in range(1, len(arr)):
            if arr[i]["counter"] < smallest["counter"]:
                smallest = arr[i]
                idx = i
        return idx
    print(findArtistMinIdx(data))

    def selectionSort(arr):
        newArr = []
        copy = list(arr)

        for i in range(len(copy)):
            smallestIdx = findMinIdx(copy)
            newArr.append(copy.pop(smallestIdx))
        return newArr
    
    #print(selectionSort([5,3,6,2,10]))

    def selectionArtistsSort(arr):
        result = []
        copy = arr[::]
        for i in range(len(copy)):
            smallestIdx = findArtistMinIdx(copy)
            result.append(copy.pop(smallestIdx))
        return result
    
    print(selectionArtistsSort(data))   

if __name__ == "__main__":
    main()
