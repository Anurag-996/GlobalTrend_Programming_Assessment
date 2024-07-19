// Write a function that takes a string input representing a simple arithmetic expression 
// (only addition and subtraction) and returns the result.
function evaluateExpression(expression) {
    return new Function('return ' + expression)();
}

console.log(evaluateExpression("5 + 10 - 3")); // Output: 12
