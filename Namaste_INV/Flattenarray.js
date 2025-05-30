function flattenArray(arr) {
    // Your implementation
    return arr.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(flattenArray(val)):acc.concat(val),[])
}

//For the purpose of user debugging.
console.log(flattenArray([1, [2, [3, 4], 5], 6]));