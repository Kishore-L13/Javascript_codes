const Merge = (arr1,arr2) => {
    const m = [];
  let i = 0;
  let j = 0;
  // Compare elements from both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      m.push(arr1[i]);
      i++;
    } else {
      m.push(arr2[j]);
      j++;
    }
  }
  // Push remaining elements from arr1
  while (i < arr1.length) {
    m.push(arr1[i]);
    i++;
  }
  // Push remaining elements from arr2
  while (j < arr2.length) {
    m.push(arr2[j]);
    j++;
    
  }
  return m;
}
const arr1 = [1, 3];
const arr2 = [2, 4, 5];
console.log(Merge(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]
