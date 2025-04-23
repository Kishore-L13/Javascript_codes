// Given N array elements print start index and end index of subarray for the given size of subarray

const startEndIndex = (arr, k) => {
    for (let i = 0; i < arr.length - k + 1; i++) {
      let j = i + k - 1;
      console.log(`Start index: ${i}, End index: ${j}`);
    }
  };
  startEndIndex([1, 2, 3, 4, 5], 3);
  // O/P : Start index: 0, End index: 2
  //       Start index: 1, End index: 3
  //       Start index: 2, End index: 4