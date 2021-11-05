async function primeTest(num) {
    // setTimeout(prime, 500);
    function prime () {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++){
            if (num % i === 0) {
                return { prime: false };
            }
            return { prime: num > 1 };
        }
    }
}

async function isPrimeAsync(num){
    await primeTest(num);
}

console.log('start');
isPrimeAsync(7);
console.log('end');
