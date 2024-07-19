// Write a function that takes a nested array and returns a flattened array.
function flattenArray(nestedArray) {
    return nestedArray.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]
