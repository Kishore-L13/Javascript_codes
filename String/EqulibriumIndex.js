// Equilibrium Index is a point in an array where the sum of elements on the left is equal to the sum of elements on the right.
// For Example arr = [-3,2,4,-1] => 2 is the equilibrium index because sl= -3 + 2 = -1, sr = -1

// brute force approach

const equilibriumIndex = arr => {
    for (let i = 0; i < arr.length; i++) {
      let sl = 0;
      let sr = 0;
      for (let j = i - 1; j >= 0; j--) {
        sl += arr[j];
      }
      for (let k = i + 1; k < arr.length; k++) {
        sr += arr[k];
      }
      if (sl === sr) {
        return i;
      }
    }
    return -1;
  };
  
  console.log(equilibriumIndex([-3, 2, 4, -1])); // 2
  
  // TC O(n^2) and SC O(1)
  
  // -----------------------------------------------------------------------------------
  
  // Optimized approach ( T.C O(n) and S.C O(n) )
  
  const equilibriumIndexOptimized = arr => {
    let prefixSum = new Array(arr.length);
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
      prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
      let sl = 0;
      let sr = 0;
      sl = prefixSum[i - 1] || 0;
      sr = prefixSum[arr.length - 1] - prefixSum[i];
      if (sl === sr) {
        return i;
      }
    }
    return -1;
  };
  console.log(equilibriumIndexOptimized([-3, 2, 4, -1])); // 2
  
  // ------------------------------------------------------------------------------------
  // Optimized approach ( T.C O(n) and S.C O(1) )
  
  const equilibriumIndexOptimized2 = arr => {
    let sum = 0;
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
      sum -= arr[i];
      if (leftSum === sum) {
        return i;
      }
      leftSum += arr[i];
    }
  };
  
  console.log(equilibriumIndexOptimized2([-3, 2, 4, -1])); // 2
  console.log(equilibriumIndexOptimized2([1,2,3,-2,-3]))
  
  // ------------------------------------------------------------------------------------