// Little Ponny and Maximum Element

// Description:
// Little Ponny is given an array, A, of N integers. In a particular operation, he can set any element of the array equal to -1.
// He wants your help in finding out the minimum number of operations required such that the maximum element of the resulting array is B.
// If it is not possible, then return -1.

// Input:
// A = [2, 4, 3, 1, 5]
// B = 3

// Output:
// 2
// Explanation: We need to remove 4 and 5 to make 3 the biggest element.

const littlePonnyAndMaximumElement = (array, k) => {
    let count = 0;
    let isPresent = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > k) {
        count++;
      }
      if (array[i] === k) {
        isPresent = true;
      }
    }
    if (isPresent && count >= 0) {
      return count;
    }
    return -1;
  };
  
  console.log(littlePonnyAndMaximumElement([2, 4, 3, 1, 5], 3)); // 2
  console.log(littlePonnyAndMaximumElement([2, 4, 3, 1, 5], 5)); // 0
  console.log(littlePonnyAndMaximumElement([2, 4, 3, 1, 5], 6)); // -1