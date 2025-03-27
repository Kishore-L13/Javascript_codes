function HasSquares(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let num of arr1) {
        freqCounter1[num] = (freqCounter1[num] || 0) + 1;
    }
    for (let num of arr2) {
        freqCounter2[num] = (freqCounter2[num] || 0) + 1;
    }
    
    for (let key in freqCounter1) {
        let squaredKey = key ** 2;
        if (!(squaredKey in freqCounter2) || freqCounter2[squaredKey] !== freqCounter1[key]) {
            return false;
        }
    }
    
    return true;
}
console.log(HasSquares([1,2,3,], [4,1,9]));
console.log(HasSquares([1,2,3,], [1,9]));
console.log(HasSquares([2,3,4], [4,16,9]));