function unique(arr) {
  let countMap = {};

  // Count occurrences of each number
  for (let i=0;i<arr.length;i++) {
      let num = arr[i]
    countMap[num] = (countMap[num] || 0) + 1;
  }
  console.log(countMap)

  // Filter out the numbers that appear only once
  return arr.filter(num => countMap[num] === 1);
}
 // Output: [1, 4]

console.log(unique([1,2,2,3,3,4]))
