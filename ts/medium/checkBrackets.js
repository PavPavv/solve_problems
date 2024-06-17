"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBrackets = void 0;
var checkBrackets = function (s) {
    if (!s.trim().length)
        return false;
    var pairs = {
        open: ['(', '[', '{'],
        close: [')', ']', '}'],
    };
    var stack = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var item = s_1[_i];
        if (pairs.open.includes(item)) {
            stack.push(item);
        }
        else if (pairs.close.includes(item)) {
            var openBracket = pairs.open[pairs.close.indexOf(item)];
            if (openBracket === stack[stack.length - 1]) {
                stack.pop();
            }
            else {
                stack.push(item);
            }
        }
    }
    return stack.length === 0 ? true : false;
};
exports.checkBrackets = checkBrackets;
console.log((0, exports.checkBrackets)('(){}[]'));
console.log((0, exports.checkBrackets)('([{}])'));
console.log((0, exports.checkBrackets)('([{}{}{}])'));
console.log((0, exports.checkBrackets)('([{}{}{}]'));
console.log((0, exports.checkBrackets)('[{}]]]'));
console.log((0, exports.checkBrackets)(' '));
