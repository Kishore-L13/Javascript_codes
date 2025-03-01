var reduce = function(nums, fn, init) {
    let accum = init;
    for (let i = 0; i < nums.length; i++) {
        accum = fn(accum, nums[i]);
    }
    return accum;
};

// Example usage:
function sum(accum, curr) {
    return accum + curr;
}

console.log(reduce([1,2,3,4], sum, 0)); // Output: 10
