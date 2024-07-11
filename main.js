//Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

//Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.
function evaluateExpression(expression) {
    return new Function('return ' + expression)();
}

console.log(evaluateExpression("5 + 10 - 3")); // Output: 12


//Write a function that takes a nested array and returns a flattened array.
function flattenArray(nestedArray) {
    return nestedArray.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]

//Write a function that checks if two given strings are anagrams of each other.
function areAnagrams(str1, str2) {
    const normalize = str => str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false

//Write a function that takes an array and returns a new array with duplicates removed.
function removeDuplicates(array) {
    return [...new Set(array)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

//Write a function that takes a string and capitalizes the first letter of each word in the string.
function capitalizeFirstLetterOfEachWord(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeFirstLetterOfEachWord("hello world")); // Output: "Hello World"

//Write a function that generates the first n numbers of the Fibonacci sequence.
function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}

console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


//Implement a simple HashMap class with put, get, and remove methods.
class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        delete this.map[key];
    }
}

const myMap = new HashMap();
myMap.put("name", "John");
console.log(myMap.get("name")); // Output: "John"
myMap.remove("name");
console.log(myMap.get("name")); // Output: undefined


//Write a function that filters out even numbers from an array.
function filterEvenNumbers(array) {
    return array.filter(num => num % 2 !== 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [1, 3, 5]


//Write a function that converts a given string to title case (capitalizing the first letter of each word).
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(toTitleCase("hello world from javascript")); // Output: "Hello World From Javascript"



