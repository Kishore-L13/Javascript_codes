const merge = (arr, low, mid, high) => {
    let temp = [];
    let left = low;
    let right = mid + 1;
    while (left <= mid && right <= high) {
      if (arr[left] < arr[right]) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        right++;
      }
    }
    while (left <= mid) {
      temp.push(arr[left]);
      left++;
    }
    while (right <= high) {
      temp.push(arr[right]);
      right++;
    }
    for(let i = low; i <= high; i++) {
      arr[i] = temp[i - low];
    }
      console.log(arr);
  };
  
  const mergeSort = (arr, low, high) => {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  };
  
  mergeSort([3, 2, 1, 5, 4], 0, 4); // [1, 2, 3, 4, 5]
  mergeSort(["123","Abc","12","abc","12345","abcd"], 0, 5); // ["123", "1234", "Abc", "abc", "abcd"]