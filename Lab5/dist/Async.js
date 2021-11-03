"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Array.prototype.removeDuplicatesAsync = function () {
    var numArray = this;
    new Promise(function (resolve) {
        resolve([...new Set(numArray)], true);
    })
        .then(console.log);
};

// Array.prototype.removeDuplicatesAsync = async function (resolve){
//     console.log(await ([...new Set(this)]));
// }

console.log("start");
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log("end");
// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]
