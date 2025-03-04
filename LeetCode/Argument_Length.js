var argumentsLength = function(...args) {
    return args.length;
};

// Example usage:
console.log(argumentsLength(1, 2, 3));  // Output: 3
console.log(argumentsLength(5));        // Output: 1
console.log(argumentsLength());         // Output: 0
console.log(argumentsLength(10, 20, 30, 40, 50)); // Output: 5
