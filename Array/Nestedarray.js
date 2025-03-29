function flattenArray(arr) {
    let fix = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            fix = fix.concat(flattenArray(arr[i])); // Recursion for nested arrays
        } else {
            fix.push(arr[i]);
        }
    }
    return fix;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); 
// Output: [1, 2, 3, 4, 5, 6]
