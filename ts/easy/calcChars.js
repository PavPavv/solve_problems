"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcChars = void 0;
var calcChars = function (str) {
    var s = str.trim().split('').sort().join('');
    var hashTable = {};
    var result = '';
    for (var i = 0; i < s.length; i++) {
        hashTable[s[i]] = hashTable[s[i]] ? hashTable[s[i]] + 1 : 1;
    }
    for (var _i = 0, _a = Object.entries(hashTable); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        result += key + '' + value;
    }
    return result;
};
exports.calcChars = calcChars;
console.log((0, exports.calcChars)('BBBAADDDDDECCCC'));
