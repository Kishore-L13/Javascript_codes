 const sumOfThirds = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 3) {
    sum += arr[i];
    }
    return sum;
   }; 

   console.log(sumOfThirds([1,2,3,4,5]))

// On the first loop iteration, i = 0, so you add arr[0] (which is 1).
// On the second loop iteration, i = 3, so you add arr[3] (which is 4).
// There are no more elements to consider, so the loop ends.