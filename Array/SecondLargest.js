// Find second Largest number in an array

const findSecondLargest = arr => {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] !== largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  };
  
  console.log(findSecondLargest([1, 25, 3, 42, 5])); // 25
  console.log(findSecondLargest([5, 4, 5])); // 4