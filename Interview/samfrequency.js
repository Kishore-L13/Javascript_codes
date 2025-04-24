// . Create a function which will accepts two arrays arr1 and
// arr2. The function should return true if every value in arr1 has
// its corresponding value squared in array2. The frequency of
// values must be same.(Effecient)

// Examples
// sameFrequency([1, 2, 3], [4, 1, 9]) // true
// sameFrequency([1, 2, 3], [1, 9]) // false
// sameFrequency([1, 2, 1], [4, 4, 1]) // false
// sameFrequency([1,2,2],[4,4,1]) // true

const sameFrequency = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
  
    const freq1 = {};
    const freq2 = {};
  
    for (let i = 0; i < arr1.length; i++) {
      freq1[arr1[i]] = (freq1[arr1[i]] || 0) + 1;
      freq2[arr2[i]] = (freq2[arr2[i]] || 0) + 1;
    }
  
    for (let key in freq1) {
      const square = key * key;
      if (!freq2[square] || freq1[key] !== freq2[square]) {
        return false;
      }
    }
  
    return true;
  };
  
  // Test Cases
  console.log(sameFrequency([1, 2, 3], [4, 1, 9])); // true
  console.log(sameFrequency([1, 2, 3], [1, 9])); // false
  console.log(sameFrequency([1, 2, 1], [4, 4, 1])); // false