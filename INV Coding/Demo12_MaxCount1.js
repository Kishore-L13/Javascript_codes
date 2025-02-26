
function maxConsecutiveOnes(arr) {
    let maxCount = 0, currentCount = 0;
    for (let num of arr) {
        if (num === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }
    console.log (maxCount);
}
maxConsecutiveOnes([1, 1, 0, 1, 1, 1,1, 0, 1, 1,2])
//console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1])); // Output: 3
