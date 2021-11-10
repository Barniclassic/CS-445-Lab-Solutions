
async function primeTest(num) {
    let a = {};
    function prime () {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++){
            if (num % i === 0) {
                a = { prime: false };
            }
            a = { prime: num > 1 };
        }
    }
    prime();
    setTimeout( ()=>(a),5000);
    return a;
}

async function isPrimeAsync(num){
   console.log(await primeTest(num));
}

console.log('start');
isPrimeAsync(7);
console.log('end');
