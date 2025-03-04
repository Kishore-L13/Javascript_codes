var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

// Example usage:
const functions = [x => x + 1, x => x * x, x => 2 * x];
const composedFunction = compose(functions);
console.log(composedFunction(4)); // Output: 65
