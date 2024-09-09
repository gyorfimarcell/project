function getFirstElement(arr) {
    return arr[0];
}
const numbers = [1, 2, 3];
const words = ["apple", "banana", "cherry"];
console.log(`First number: ${getFirstElement(numbers)}`);
console.log(`First word: ${getFirstElement(words)}`);
function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}
console.log(`Factorial of 5: ${factorial(5)}`);