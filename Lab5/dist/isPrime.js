"use strict";
var isPrime = function (num) { return new Promise(function (resolve, reject) {
    setTimeout(function () {
        for (var i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) {
                reject({ prime: false });
            }
        }
        resolve({ prime: num > 1 });
    }, 500);
}); };
console.log('start');
isPrime(7)
    .then(function (res) { return console.log(res); })
    .catch(function (err) { return console.error(err); });
console.log('end');
// Output:
// start
// end
// { prime: true } 
