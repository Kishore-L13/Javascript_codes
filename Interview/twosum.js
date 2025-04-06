function twoSum(nums, target) {
    const map = {}; // store value: index
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (map.hasOwnProperty(complement)) {
        return [map[complement], i];
      }
  
      map[nums[i]] = i;
    }
  
    return []; // If no solution found
  }
  console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
  console.log(twoSum([1, 3, 5, 6], 8)); // Output: [0, 3]
  