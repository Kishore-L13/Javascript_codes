const sortedData = (arr1, arr2) => {
    let mergedArray = [];
    let i = 0, j = 0;
    const len1 = arr1.length;
    const len2 = arr2.length;
  
    for (let k = 0; k < len1 + len2; k++) {
      if (i < len1 && (j >= len2 || arr1[i] < arr2[j])) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    console.log(mergedArray);
  };
  
    sortedData([1,3,4,5,],[2,6,8,9])
    sortedData([0, 3, 4, 31], [4, 6, 30])
    