const countEvenIndex = (arr, k) => {
    if (k > arr.length) return;
    let prefixSum = new Array(arr.length);
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (i % 2 === 0) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
      } else {
        prefixSum[i] = prefixSum[i - 1];
      }
    }
    return prefixSum[k];
  };
  console.log(countEvenIndex([1, 2, 3, 4, 5], 4)); // [1, 2, 3, 4, 5]