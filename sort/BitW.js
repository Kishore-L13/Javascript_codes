// Given an array B of length A with elements 1 or 0. Find the number of subarrays such that the bitwise OR of all the elements present in the subarray is 1.
//  Example:
//  Input: [1, 0, 1, 0, 1]
//  Output: 9
//  Explanation: The subarrays with bitwise OR of 1 are: [1], [1, 0], [1, 0, 1], [1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1], [0, 1, 0], [0, 1, 0, 1], [1]

const countNonZeroSubarrays = arr => {
    let totalSubArrays = (arr.length * (arr.length + 1)) / 2; // Total number of subarrays
    let zeroCount = 0; // Count of zeros in the array
    for (let i = 0; i <= arr.length; i++) {
      // here i<= arr.length to include the last element corner case last element is 0
      if (i < arr.length && arr[i] === 0) {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          totalSubArrays -= (zeroCount * (zeroCount + 1)) / 2; // Subtract the number of subarrays containing zeros
          zeroCount = 0; // Reset zero count
        }
      }
    }
    return totalSubArrays; // Return the count of subarrays with bitwise OR of 1
  };
  console.log(countNonZeroSubarrays([1, 0, 1, 0, 1])); // Output: 13
  console.log(countNonZeroSubarrays([1, 1, 1, 1])); // Output: 10
  console.log(countNonZeroSubarrays([0, 0, 0])); // Output: 0
  console.log(countNonZeroSubarrays([1, 0, 0, 1, 0])); // Output: 11