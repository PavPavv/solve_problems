var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var users = [
    {
        id: 8,
        name: 'Tom',
    },
    {
        id: 3,
        name: 'Dave',
    },
    {
        id: 2,
        name: 'Mag',
    },
    {
        id: 9,
        name: 'Billy',
    },
    {
        id: 4,
        name: 'John',
    },
    {
        id: 1,
        name: 'Jack',
    },
    {
        id: 5,
        name: 'James',
    },
    {
        id: 7,
        name: 'Kurt',
    },
    {
        id: 6,
        name: 'Lars',
    },
];
var binaryInsertionSort = function (source) {
    var arr = __spreadArray([], source, true);
    var N = arr.length - 1;
    for (var i = 1; i < arr.length; i++) {
        var x = arr[i];
        var l = 0;
        var r = i;
        while (l < r) {
            var middle = Math.floor((l + r) / 2);
            if (arr[middle].id <= x.id) {
                l = middle + 1;
            }
            else {
                r = middle;
            }
        }
        for (var j = i; j <= r + 1; j = j - 1) {
            arr[j] = arr[j - 1];
        }
        arr[r] = x;
    }
    return arr;
};
console.log(binaryInsertionSort(users));
