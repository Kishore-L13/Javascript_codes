function separateZerosAndOnes(arr) {
    let zeroCount = 0;

    // Count the number of 0s
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        }
    }

    // Overwrite the array with 0s followed by 1s
    for (let i = 0; i < arr.length; i++) {
        if (i < zeroCount) {
            arr[i] = 0;
        } else {
            arr[i] = 1;
        }
    }
    
    return arr;
}

// Example usage:
let arr = [1, 0, 1, 0, 1, 0, 1, 1, 0, 0];
console.log(separateZerosAndOnes(arr)); // Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
