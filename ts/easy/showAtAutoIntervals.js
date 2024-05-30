"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAtAutoIntervals = void 0;
var showAtAutoIntervals = function (myInterval) {
    var counter = myInterval;
    var tick = 1000 * counter;
    var interval = setInterval(function () {
        if (counter <= 10) {
            console.log(counter);
            counter++;
            (0, exports.showAtAutoIntervals)(counter);
        }
        clearInterval(interval);
        return;
    }, tick);
};
exports.showAtAutoIntervals = showAtAutoIntervals;
(0, exports.showAtAutoIntervals)(1);
