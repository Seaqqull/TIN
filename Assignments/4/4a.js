// Iterative
let factorialIterative = fact(4);

console.log("Iterative: " + factorialIterative);


function fact(num)
{
    let result = 1;
    for(let i = 2; i <= num; i++) {
        result *= i
    }
    return result;
}

// Recursive
let factRecursive = function (num) {return (num > 1)? num * factRecursive(num - 1) : 1};
let factorialRecursive = factRecursive(5);

console.log("Recursive: " + factorialRecursive);