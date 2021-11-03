Array.prototype.removeDuplicatesAsync = function (){
    let numArray: Array<number> = this;
    new Promise((resolve) => {
        resolve([... new Set(numArray)])
    })
    .then(console.log);
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]