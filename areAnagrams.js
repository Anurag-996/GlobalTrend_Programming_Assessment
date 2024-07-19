// Write a function that checks if two given strings are anagrams of each other.
function areAnagrams(str1, str2) {
    const normalize = str => str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
