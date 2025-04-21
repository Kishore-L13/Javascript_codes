const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Shift elements of the sorted portion to the right to make space for the key
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place the key in its correct position
      arr[j + 1] = key;
    }
    console.log(arr);
  };
  
  insertionSort([64, 34, 25, 12, 22, 11, 90]); // Example usage