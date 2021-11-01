let num = 4;
let isNumberPrime = isPrime(num);

console.log("Prime number(" + num + "): " + isNumberPrime);

function isPrime(n) {
    if (n <= 1)
        return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}