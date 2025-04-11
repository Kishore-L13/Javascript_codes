const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      let swapped = false;
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      if (!swapped) break;
    }
    console.log(arr);
  };
  bubbleSort([45, 5, 9, 45, 10, 48, 1, 67]); // [1, 5, 9, 10, 48, 67]