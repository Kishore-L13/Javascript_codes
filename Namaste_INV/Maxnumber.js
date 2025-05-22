function findMaxNumber(arr) {
    // Your implementation
     if (arr.length === 0 || arr.length === null) {
        return null
    }
    let max = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i]>max) {
            max = arr[i]
        } 
    }
    return max
}

console.log(findMaxNumber([1,2,3,4,5]))