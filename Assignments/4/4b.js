let nth = 6;
let fibNumber = fib(nth - 1);

console.log("Fibonacci(" + nth + "): " + fibNumber);

function fib(n) {
    return ((n == 0) || (n == 1))? n : fib(n - 1) + fib(n - 2);
}