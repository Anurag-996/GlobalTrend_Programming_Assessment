// Write a function that filters out even numbers from an array.
function filterEvenNumbers(array) {
    return array.filter(num => num % 2 !== 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [1, 3, 5]
