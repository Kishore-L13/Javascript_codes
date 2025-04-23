//  You are given an integer array nums. You can choose exactly one index and remove the element. 
// Notice that the index of the elements may change after the removal.
//  You have to find the number of special indices in the array.
//  A sum of even indexed elements and a sum of odd indexed elements are equal after removing the element at index i.

// LeetCode 1664: https://leetcode.com/problems/ways-to-make-a-fair-array/description/

const specialIndex = arr => {
    let PE = new Array(arr.length);
    let PO = new Array(arr.length);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        PE[i] = arr[i];
        PO[0] = 0;
      } else {
        PE[i] = PE[i - 1] + (i % 2 === 0 ? arr[i] : 0);
        PO[i] = PO[i - 1] + (i % 2 === 1 ? arr[i] : 0);
      }
    }
    let SE = PE[0];
    let SO = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        SE = PO[arr.length - 1] - PO[i];
        SO = PE[arr.length - 1] - PE[i];
        if (SE == SO) {
          count++;
        }
      } else {
        SE = PE[i - 1] + PO[arr.length - 1] - PO[i];
        SO = PO[i - 1] + PE[arr.length - 1] - PE[i];
        if (SE === SO) {
          count++;
        }
      }
    }
    return count;
  };
  
  console.log(specialIndex([1, 2, 3])); // 0
  console.log(specialIndex([2, 1, 6, 4])); //1
  console.log(specialIndex([1, 1, 1])); // 3
  
  console.log("-------------------------------------------------");
  
  // Using carry forward Approach
  
  const specialIndex2 = arr => {
    let evenSum = 0;
    let oddSum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenSum += arr[i];
      } else {
        oddSum += arr[i];
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenSum -= arr[i];
        if (oddSum === evenSum) {
          count++;
        }
        oddSum += arr[i];
      } else {
        oddSum -= arr[i];
        if (oddSum === evenSum) {
          count++;
        }
        evenSum += arr[i];
      }
    }
    return count;
  };
  console.log(specialIndex2([1, 2, 3])); // 0
  console.log(specialIndex2([2, 1, 6, 4]));
  console.log(specialIndex2([1, 1, 1]));