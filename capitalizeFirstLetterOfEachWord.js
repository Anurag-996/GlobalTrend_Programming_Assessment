// Write a function that takes a string and capitalizes the first letter of each word in the string.
function capitalizeFirstLetterOfEachWord(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeFirstLetterOfEachWord("hello world")); // Output: "Hello World"
