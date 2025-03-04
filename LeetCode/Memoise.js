function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args); // Convert arguments to a string key
        
        if (cache.has(key)) {
            return cache.get(key); // Return cached result
        }
        
        const result = fn(...args); // Compute result
        cache.set(key, result); // Store in cache
        return result;
    };
}

// Example usage:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 3)); // 5 (computed)
console.log(memoizedSum(2, 3)); // 5 (cached)
console.log(memoizedSum(4, 5)); // 9 (computed)
console.log(memoizedSum(4, 5)); // 9 (cached)
